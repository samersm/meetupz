import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Meetup } from '../../meetup';

@Component({
  selector: 'app-meetup-details',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css']
})
export class MeetupDetailsComponent implements OnInit {
  meetups: Meetup;
  sub:any;

  constructor(
    public dataService:DataService,
    public router:Router,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        console.log('getting meetup with id: ', id);
        this.dataService
          .get(id)
          .subscribe(meetups => {this.meetups = meetups});
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
