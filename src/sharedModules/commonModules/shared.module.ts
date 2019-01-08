import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Ng2SortableModule } from 'ng2-ui-sortable';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatToolbarModule,
         MatSidenavModule, 
         MatListModule, 
         MatCardModule,
         MatSelectModule,
         MatButtonModule,
         MatInputModule,
         MatTableModule,
         MatTooltipModule
       } from '@angular/material';
       import {MatIconModule} from '@angular/material/icon';

import { CustomTableComponent } from 'src/app/custom-table/custom-table.component';

@NgModule({
  declarations: [
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxInfiniteScrollerModule,Ng2SortableModule,
    InfiniteScrollModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  exports:[
    CustomTableComponent,
    BrowserAnimationsModule,
    HttpClientModule,Ng2SortableModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonToggleModule
  ]
})
export class SharedModule { }
