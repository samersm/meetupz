import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Meetup } from '../meetup';

const Meetup : Meetup[] = [];

@Injectable()
export class DataService {
  public baseUrl: string = 'http://localhost:3000/api';

  constructor(public http: Http) {
    console.log('Data service connected...');
   }

   getAll(): Observable<Meetup[]>{
      let meetups$ = this.http
        .get(`${this.baseUrl}/meetups`, { headers: this.getHeaders()})
        .map((res:Response) => res.json())
        .catch(handleError);
        return meetups$;
    }
    public getHeaders(){
      // I included these headers because otherwise FireFox
      // will request text/html
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    get(id: string): Observable<Meetup> {
      let meetup$ = this.http
        .get(`${this.baseUrl}/meetups/${id}`, {headers: this.getHeaders()})
        .map((res:Response) => res.json())
        .catch(handleError);
        return meetup$;
    }
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(meetupData:any){
  let extractedId = meetupData.url.replace('http://localhost:3000/api/meetups/','').replace('/','');
  return parseInt(extractedId);
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
