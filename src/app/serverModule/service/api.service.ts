import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private _http: Http
  ) { }

  getServersData() {
    return this._http.get('url')
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {

    return res.json();
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
