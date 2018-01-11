import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeetupDetailsComponent } from './components/meetup-details/meetup-details.component';
import { MeetupItemComponent } from './components/meetup-item/meetup-item.component';
import { MeetupsComponent } from './components/meetups/meetups.component';
import { AddMeetupComponent } from './components/add-meetup/add-meetup.component';
import { EditMeetupComponent } from './components/edit-meetup/edit-meetup.component';


import { DataService } from './services/data.service';


const appRoutes: Routes = [
  {path: '', component: MeetupsComponent},
  {path: 'meetups', component: MeetupsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'meetup-details/:id', component: MeetupDetailsComponent},
  {path: 'add-meetup', component: AddMeetupComponent},
  {path: 'edit-meetup/:id', component: EditMeetupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    NavbarComponent,
    MeetupDetailsComponent,
    MeetupItemComponent,
    MeetupsComponent,
    AddMeetupComponent,
    EditMeetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
