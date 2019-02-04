import { Component, OnInit, ViewChild,ElementRef, Renderer2, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource ,Sort, MatButtonToggleGroup, MatSort} from '@angular/material';
import { AppService } from 'src/sharedModules/Service/app.service';
import {FormControl} from '@angular/forms'
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';
declare var JSEncrypt;
// import *  as NodeRSA from 'node-rsa';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  martData=[];
  dataTrue: boolean=false;
  constructor(public serviceService: AppService,public renderer: Renderer2) {
  //  this.serviceService.getDatas().subscribe(resp=>{
    //  this.names(resp);

    //  })
    //   this.example(null)
    this.getData();
   }
  ngOnInit() {
//     const key = new NodeRSA({b: 512});
 
//     const text = 'Hello RSA!';
// const encrypted = key.encrypt(text, 'base64');
// console.log('encrypted: ', encrypted);
// const decrypted = key.decrypt(encrypted, 'utf8');
// console.log('decrypted: ', decrypted);
  }


  names(resp: any){
    console.log(resp.response)
    // this.example(resp.response['publicKey']['encoded']);

    //  var options = {};
    //  options['default_public_exponent'] = resp.response['rsaPublicKeySpec']['publicExponent'];
    // var encrypt = new JSEncrypt(options);
    // var decrypt = new JSEncrypt();
    //  var encryptdata;
    
    //  encrypt.setPublicKey(resp.response['publicKey']['encoded']);
    //  console.log( "generate",encrypt.getPublicKey());
    //  encryptdata = encrypt.encrypt('Ajai@123');
  
  }
  getData(){
    this.martData=[
      {USER: "yurifgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"vvv" ,SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "yuri", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"vvv",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
       {USER: "yuri", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"vvv",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
       {USER: "yuri", SCORE: 1000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
       {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 19, COUNTRY: "RU",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 19, COUNTRY: "RU",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 18, COUNTRY: "RU",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 18, COUNTRY: "Ar",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "tim", SCORE: 1000, TIME: 30, AGE: 17, COUNTRY: "UK",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "sally", SCORE: 2000, TIME: 30, AGE: 16, COUNTRY: "CA",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "mary", SCORE: 1500, TIME: 31, AGE: 19, COUNTRY: "PL",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "mark", SCORE: 2000, TIME: 30, AGE: 18, COUNTRY: "DE",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "joe", SCORE: 2500, TIME: 33, AGE: 18, COUNTRY: "US",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "jane", SCORE: 4000, TIME: 35, AGE: 16, COUNTRY: "DE",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "bob", SCORE: 2000, TIME: 32, AGE: 16, COUNTRY: "US",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "anita", SCORE: 2500, TIME: 32, AGE: 17, COUNTRY: "LV",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
      {USER: "amy", SCORE: 1500, TIME: 29, AGE: 19, COUNTRY: "UK",SURNAME:"kk",SURNAME1:"vvv",SURNAME2:"vvv" ,SURNAME3:"vvv",SURNAME4:"vvv" ,SURNAME5:"vvv"},
    ];
    this.dataTrue= true;
  }
  example(resp){

    var options = {};
     options['default_public_exponent'] = '65537';
    
   var encrypt = new JSEncrypt(options);
   var decrypt = new JSEncrypt();
    var publicKey = resp;

    console.log(encrypt.getPublicKey());
    console.log(encrypt.getPublicKey());

     var privateKey = encrypt.getPrivateKey();


encrypt.setPublicKey(publicKey);
decrypt.setPrivateKey(privateKey);

var content = "Sunoida@123";
console.log("Content: " + content);

var encoded = encrypt.encrypt(content);
console.log("Encoded: " + encoded);

var decoded = decrypt.decrypt(encoded);
console.log("Decoded: " + decoded);
  }

}


