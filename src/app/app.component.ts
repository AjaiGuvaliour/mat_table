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
    this.serviceService.getData('/ref-data/symbols').subscribe(data => {
    this.getData(data)
    }, error => {
      console.log(error);
    });

  }
  ngOnInit() {
  }

  getData(value: any){
    this.martData=[
      {USER: "yuri", SCORE: 6000, TIME: 34, AGE: 19, COUNTRY: "RU"},
       {USER: "yuri", SCORE: 3000, TIME: 34, AGE: 19, COUNTRY: "RU"},
       {USER: "yuri", SCORE: 1000, TIME: 34, AGE: 19, COUNTRY: "RU"},
       {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 19, COUNTRY: "RU"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 19, COUNTRY: "RU"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 18, COUNTRY: "RU"},
      {USER: "yuri", SCORE: 1000, TIME: 3, AGE: 18, COUNTRY: "Ar"},
      {USER: "tim", SCORE: 1000, TIME: 30, AGE: 17, COUNTRY: "UK"},
      {USER: "sally", SCORE: 2000, TIME: 30, AGE: 16, COUNTRY: "CA"},
      {USER: "mary", SCORE: 1500, TIME: 31, AGE: 19, COUNTRY: "PL"},
      {USER: "mark", SCORE: 2000, TIME: 30, AGE: 18, COUNTRY: "DE"},
      {USER: "joe", SCORE: 2500, TIME: 33, AGE: 18, COUNTRY: "US"},
      {USER: "jane", SCORE: 4000, TIME: 35, AGE: 16, COUNTRY: "DE"},
      {USER: "bob", SCORE: 2000, TIME: 32, AGE: 16, COUNTRY: "US"},
      {USER: "anita", SCORE: 2500, TIME: 32, AGE: 17, COUNTRY: "LV"},
      {USER: "amy", SCORE: 1500, TIME: 29, AGE: 19, COUNTRY: "UK"}
    ];
    this.dataTrue= true;
  }

}