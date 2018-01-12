import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meetup } from '../../meetup';
import {Observable} from "rxjs";


@Component({
  selector: 'app-add-meetup',
  templateUrl: './add-meetup.component.html',
  styleUrls: ['./add-meetup.component.css']
})
export class AddMeetupComponent implements OnInit {
  meetups: Meetup = new Meetup();
  meetupId: string = '';

  constructor(    public dataService:DataService,
                  public router:Router,
                  public route:ActivatedRoute
                ) { }

  ngOnInit() {

  }

}
