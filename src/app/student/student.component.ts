import { Component, OnInit, ViewChild,ElementRef, Renderer2} from '@angular/core';
import { MatPaginator, MatTableDataSource ,MatSort} from '@angular/material';
import { AppService } from 'src/sharedModules/Service/app.service';
import { BehaviorSubject } from 'rxjs';
import * as $ from 'jquery';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'student-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  getValue: any = [];
  array: any = [];
  array1: any=[];
  dataLoaded = false;
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  dataSource: any = [];
  _dataSubject = new BehaviorSubject([])
  fiterdata: any=[];
  displayedColumns: string[] = ['symbol', 'Name', 'Date', 'Enabled', 'Type', 'IexID'];
  displayedColumns1: string[] = ['Name', 'Calculation'];
  dataSource1 = new MatTableDataSource<any>(ELEMENT_DATA1.data);
  total=ELEMENT_DATA1.total
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // tslint:disable-next-line: no-use-before-declare
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild('tableData') tableData:ElementRef;
  len: any;
  constructor(public serviceService: AppService,private renderer: Renderer2, private el: ElementRef) {
    
    this.serviceService.getData('ref-data/symbols').subscribe(data => {
      this.dataLoaded = true;
      console.log(data.length)
      this.array = data;
      this.fiterdata=data;
      this.array1 = data.slice(0,20);
    }, error => {
      console.log(error);
    });

  }
  ngOnInit() {
  }


  onScrollDown() {
      let len = this.array1.length;
      localStorage.setItem('data',JSON.stringify(this.array1));

      console.log("array1",this.array1.length,"array",this.array.length)
      for(let i = len; i < len+5; i++){
        if(this.array.length > this.array1.length){
        this.array1.push(this.array[i])};
      }
      this.array1 = this.array1.slice(0);
    
  }

  
  filterData(event){
    
   var filldata =  this.fiterdata.filter(function(ee){
    
    if(ee.symbol.toLowerCase().indexOf(event.target.value) !=-1){
       return true;
    }

   });
   this.array=filldata;
   this.array1=filldata.slice(0,20);
   }

}

export const ELEMENT_DATA1=
  
{
data: [
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},
{Name:"SBI",color:"red",Calculation:26000},
{Name:"ICICI",color:"green",Calculation:26000},
{Name:"HDFC",color:"blue",Calculation:26000},
{Name:"SBI",color:"orange",Calculation:26000},

],
total:11111111,
}