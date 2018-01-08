import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {

  meetups:Meetup[];

  constructor(private dataService:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.dataService.getMeetups().subscribe((meetups) => {
      // console.log(meetups);
      this.meetups = meetups;
      });
  }


  interface Meetup {
    name: string,
    city: string,
    address: string,
    id: string
  }

//   constructor(private userService: UserService) {}
// profile = {};
//
// loadUser() {
//   this.userService.getUser().subscribe(data => this.profile = data);
// }


}
