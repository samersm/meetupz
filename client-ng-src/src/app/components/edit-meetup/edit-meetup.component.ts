import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../meetup';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';
// import meetup = http.post;
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.css']
})
export class EditMeetupComponent implements OnInit {

  meetups: Meetup;
  // meetupId: string = '';
  errorMessage = "";
  loading = false;

  constructor(    public dataService:DataService,
                  public router:Router,
                  public route:ActivatedRoute
              ) { }

  ngOnInit() {


        if (this.route.snapshot.params['id']) {
          this.route.params.switchMap((params: Params) => {

            let id = params['id'];
            if (typeof params['id'] !== "undefined" && params['id'] !== null) {


              this.loading = true;
              return this.dataService.getMeetup(id); // we can see an error if params["id"] is undefined or null. let check..
            }


          }).subscribe(res => {

            // after get the meetup detail we set loading to false.
            this.loading = false;
            this.meetups = res as Meetup; // if meetup is being edit. we get the id from params , and get detail of the meetup via meetupService.
          }, err => {

            console.log(err);
          });
        }

  }

  onSubmit() {


    // if the meetup.id is not null that mean we need update the meetup. otherwise create new meetup
    if (this.meetups.id) {

      // do save the meetup
      this.dataService.updateMeetup(this.meetups).subscribe(res => {

        // this mean the meetup has been saved
        // now we can redirect to the meetup view.
        this.router.navigate(['/meetups', this.meetups.id]);

      }, err => {

        console.log(err); // this for development only.
        this.errorMessage = "An error saving the meetup.";
      });


    } else {

      // let do meetup this data to rest service...
      this.dataService.createMeetup(this.meetups).subscribe(res => {

        // we got successful the meetup
        console.log(res.id); // this is meetup ID we can use to redirect to view the detail of the meetup.
        // direct to view meetup
        this.router.navigate(['/meetups', res.id]);

      }, err => {

        console.log(err);
        this.errorMessage = "An error saving the meetup.";
      });


    }


  }

}
