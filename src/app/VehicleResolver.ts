import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

export class VehicleResolver implements Resolve<any> {
    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> {
        console.log(route,"route")
     return null ;
     
    }
    
}