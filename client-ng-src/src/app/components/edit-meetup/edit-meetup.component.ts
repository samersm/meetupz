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



  constructor(    public dataService:DataService,
                  public router:Router,
                  public route:ActivatedRoute
              ) { }

  ngOnInit() {
  }

}
