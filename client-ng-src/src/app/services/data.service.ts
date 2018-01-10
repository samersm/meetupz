import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Meetup } from '../meetup';

@Injectable()
export class DataService {

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
   getMeetups() {
    return this.http.get('http://localhost:3000/api/meetups')
      .map((res:Response) => res.json());
    }
   getMeetup(id: string): Observable<Meetup> {
     let meetup$ = this.http
      .get(`http://localhost:3000/api/meetups/${id}`, {headers: this.getHeaders()})
      .map((res:Response) => res.json());
      return meetup$;
    }

}
