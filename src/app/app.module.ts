import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../sharedModules/commonModules/shared.module';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { StartupServiceService } from './startup-service.service';
import { VehicleResolver } from './VehicleResolver';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    
  ],
  imports: [
    BrowserModule,SharedModule,
    AppRoutingModule
  ],
  providers: [
    VehicleResolver,

    // {
    //   provide: APP_INITIALIZER,
    //  useFactory: startupServiceFactory,
    //  deps: [StartupServiceService],
    //  multi: true
    // }


    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function startupServiceFactory(
//   startupService: StartupServiceService
//   ): Function {
//   return () => startupService.getToken();
// }
