import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartupServiceService {
  baseURL="http://10.16.1.216:8090/vision/generateKeypair";

  constructor(public httpClient : HttpClient) { }
  option: any= new HttpHeaders({'Content-type':'application/json'})

  getToken(): Observable<any>{
   return this.httpClient.get(this.baseURL,this.option);
  }

 
}
