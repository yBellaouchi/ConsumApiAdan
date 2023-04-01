import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private http:HttpClient) { }

  getTimes(lat:number,long:number):Observable<any>{

    return this.http
      .get('http://api.aladhan.com/v1/calendar?latitude='+lat+'&longitude='+long)

  }
}
