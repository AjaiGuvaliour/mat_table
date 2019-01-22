import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL="http://10.16.1.216:8090/vision/generateKeypair";

  constructor(public httpClient : HttpClient) { }
  option: any= new HttpHeaders({'Content-type':'application/json'})
  getDatas(): Observable<any>{
   return this.httpClient.get(this.baseURL,this.option).pipe(catchError(this.handleError))
  }
  handleError(error){
   return throwError(error);
  }
}
