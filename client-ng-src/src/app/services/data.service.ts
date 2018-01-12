import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/switchMap';

import { Meetup } from '../meetup';

@Injectable()
export class DataService {
  baseUrl = "http://localhost:3000/api";

  constructor(public http: Http) {
    console.log('Data service connected...');
   }
   public getHeaders(){
     // I included these headers because otherwise FireFox
     // will request text/html
     let headers = new Headers();
     headers.append('Accept', 'application/json');
     return headers;
   }
   getMeetups(): Observable<Meetup[]> {
     // in the part we get all the meetup without filter query, now we need pass the filter
     let url = this.baseUrl + "/meetups";
     return this.http.get(url, {headers: this.getHeaders()}).map(res => res.json()).catch(err => {

       return Observable.throw(err);
     });
    }
   getMeetup(id: string): Observable<Meetup> {
      let url = `${this.baseUrl}/meetups/${id}`;
      return this.http.get(url, {headers: this.getHeaders()}).map(res => res.json()).catch(err => {

      return Observable.throw(err);
      });
    }

    createMeetup(meetup: Meetup): Observable<any> {

      let url = this.baseUrl + "/meetups";
      return this.http.post(url, meetup, {headers: this.getHeaders()}).map(res => res.json()).catch(err => {

        return Observable.throw(err);
      })
    }

    updateMeetup(meetup: Meetup): Observable<any> {

      let url = this.baseUrl + "/meetups/" + meetup.id
      return this.http.put(url, meetup, {headers: this.getHeaders()}).map(res => res.json()).catch(err => {
        return Observable.throw(err);
      })
    }

}
