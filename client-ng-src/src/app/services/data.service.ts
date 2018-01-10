import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected...');
   }

   getMeetups() {
    return this.http.get('http://localhost:3000/api/meetups')
      .map((res:Response) => res.json());
    }

}
