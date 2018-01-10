import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
// import { RouterModule, Routes } from '@angular/router';
import { Meetup } from '../../meetup';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {

  meetups: Meetup[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(public dataService:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');

      this.dataService
        .getAll()
        .subscribe(
           /* happy path */ meetups => this.meetups = meetups,
           /* error path */ e => this.errorMessage = e,
           /* onCompleted */ () => this.isLoading = false);
  }
}
