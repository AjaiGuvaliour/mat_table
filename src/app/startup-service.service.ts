import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartupServiceService {
  baseURL="http://10.16.1.216:8091/generateKeypair";

  constructor(public httpClient : HttpClient) { }
  option: any= new HttpHeaders({'Content-type':'application/json'})

  getToken(): Promise<any>{
   return this.httpClient.get(this.baseURL,this.option).toPromise()
   .then(response => {
     console.log("response",response)
       return response;
   })
   .catch(err => err);

    // let prom = new Promise(function(resolve,reject){
    //   return this.httpClient.get(this.baseURL,this.option).subscribe(data=>{
    //     resolve()
    //   })
    // })

    // return prom;
  }

 
}
