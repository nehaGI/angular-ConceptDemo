import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'error-app',
  templateUrl: './error.component.html'
})
export class ErrorComponent  {

  constructor(private _router:Router){

  }
  goHome(): void {
    this._router.navigate(['home']);
 }
  
}
