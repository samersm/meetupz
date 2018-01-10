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
  sub:any;

  constructor(    public dataService:DataService,
                  public router:Router,
                  public route:ActivatedRoute
                ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      console.log('getting meetup with id: ', id);
      this.dataService
        .getMeetup(id)
        .subscribe(meetups => {this.meetups = meetups});
    });
  }

}
