import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../meetup';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-meetup-details',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css']
})
export class MeetupDetailsComponent implements OnInit {
  meetups: Meetup;
  meetupId: string = '';

  constructor(    public dataService:DataService,
                  public router:Router,
                  public route:ActivatedRoute
                ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {

      let id = params['id'];
      this.meetupId = id;

      return this.dataService.getMeetup(id);
    }).subscribe(response => {

      this.meetups = response;


    }, err => {

      console.log(err);
    });
  }

}
