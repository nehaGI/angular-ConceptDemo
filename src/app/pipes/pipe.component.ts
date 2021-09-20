import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pipe-app',
  templateUrl: './pipe.component.html'
})
export class PipeComponent  {
  
  constructor(private _router:Router,private activateR:ActivatedRoute){
    
  }
  pipeName:string;
  
  ngOninit(){
    this.activateR.paramMap.subscribe(params=>
      this.pipeName=params.get('name'));
  }
  goHome(): void {
    this._router.navigate(['home']);
 
}

gotoPipe(){
  this._router.navigate(['pipes']);
}
}
