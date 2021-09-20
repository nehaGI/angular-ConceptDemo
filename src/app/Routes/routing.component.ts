import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'route-app',
  templateUrl: './routing.component.html'
})
export class RoutingComponent  {
  
  constructor(private _router:Router){

  }
  goHome(): void {
    this._router.navigate(['home']);
 
}
}
