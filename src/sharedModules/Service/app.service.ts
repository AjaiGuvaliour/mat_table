import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL="";

  constructor(public httpClient : HttpClient) { }
  option: any= new HttpHeaders({'Content-type':'application/json'})
  getData(url: any): Observable<any>{
    console.log(this.baseURL+url)
   return this.httpClient.get(this.baseURL+url,this.option).pipe(catchError(this.handleError))
   //.pipe();
  }
  handleError(error){
   return throwError(error);
  }
}
