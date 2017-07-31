import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Info } from './info'

@Injectable()
export class InfoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:9000/tm/info';  // URL to web api

  constructor(private http: Http) { }

  getInfo(): Promise<Info> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Info)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
