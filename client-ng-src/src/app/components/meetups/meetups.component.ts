import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Meetup } from '../../meetup';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {

  meetups: Meetup[];

  constructor(private dataService:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.getMeetups();

    // Old Codes & Syntax
    // this.dataService.getMeetups().subscribe((meetups) => {
    //   // console.log(meetups);
    //   this.meetups = meetups;
    //   });
  }

  getMeetups(): void {
    this.dataService.getMeetups()
      .subscribe(meetups => this.meetups = meetups);
  }

}

  // Old Codes & Syntax
  // interface Meetup {
  //   name: string,
  //   city: string,
  //   address: string,
  //   id: string
  // }
