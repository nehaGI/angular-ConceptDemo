import {Directive,ElementRef, TemplateRef, ViewContainerRef,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[ttBgColor]'
})
export class BgColorDirective implements OnInit{

  @Input() ttBgColor;
  constructor(private eRef:ElementRef){

  }
  ngOnInit(){
    this.eRef.nativeElement.classList.add('style1');

  }



}