import { Component, OnInit, ViewChild,ElementRef, Renderer2, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource ,Sort, MatButtonToggleGroup, MatSort} from '@angular/material';
import { AppService } from 'src/sharedModules/Service/app.service';
import {FormControl} from '@angular/forms'
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';


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
   this.serviceService.getDatas().subscribe(resp=>{console.log(resp)})
   this.getData();
  }
  ngOnInit() {
  }

  hai(data){
   console.log(data)
  }

  getData(){
    this.martData=[
      {USER: "yuri", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"vvv"},
      {USER: "yuri", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"vvv"},
       {USER: "yuri", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"vvv"},
       {USER: "yuri", SCORE: 1000, TIME: 34, AGE: 19, COUNTRY: "RU",SURNAME:"kk"},
       {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 19, COUNTRY: "RU",SURNAME:"kk"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 19, COUNTRY: "RU",SURNAME:"kk"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 18, COUNTRY: "RU",SURNAME:"kk"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 18, COUNTRY: "Ar",SURNAME:"kk"},
      {USER: "tim", SCORE: 1000, TIME: 30, AGE: 17, COUNTRY: "UK",SURNAME:"kk"},
      {USER: "sally", SCORE: 2000, TIME: 30, AGE: 16, COUNTRY: "CA",SURNAME:"kk"},
      {USER: "mary", SCORE: 1500, TIME: 31, AGE: 19, COUNTRY: "PL",SURNAME:"kk"},
      {USER: "mark", SCORE: 2000, TIME: 30, AGE: 18, COUNTRY: "DE",SURNAME:"kk"},
      {USER: "joe", SCORE: 2500, TIME: 33, AGE: 18, COUNTRY: "US",SURNAME:"kk"},
      {USER: "jane", SCORE: 4000, TIME: 35, AGE: 16, COUNTRY: "DE",SURNAME:"kk"},
      {USER: "bob", SCORE: 2000, TIME: 32, AGE: 16, COUNTRY: "US",SURNAME:"kk"},
      {USER: "anita", SCORE: 2500, TIME: 32, AGE: 17, COUNTRY: "LV",SURNAME:"kk"},
      {USER: "amy", SCORE: 1500, TIME: 29, AGE: 19, COUNTRY: "UK",SURNAME:"kk"}
    ];
    this.dataTrue= true;
  }

}