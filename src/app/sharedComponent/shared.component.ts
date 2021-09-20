import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-app',
  templateUrl: './shared.component.html'
})
export class SharedComponent  {
  pipeName:string;
  constructor(private _router:Router,private activateR:ActivatedRoute){
    
  }
  ngOninit(){
    this.activateR.paramMap.subscribe(params=>
      this.pipeName=params.get('name'));
  }
  
}
