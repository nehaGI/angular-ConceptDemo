import {Directive,ElementRef, TemplateRef, ViewContainerRef,Input} from '@angular/core';

@Directive({
  selector: '[ttif]'
})
export class IfDirective{
  flag;
  constructor(private vcRf:ViewContainerRef,private tRf:TemplateRef<any>){
    //TempleteRef create <ng-template>
    //ViewContainerRef holds the ref of whic will use our directive
  }
  @Input() set ttif(condition){
   this.flag=condition;
   this.update();

  }

  update(){
    if(this.flag)
    this.vcRf.createEmbeddedView(this.tRf);
    else
    this.vcRf.clear();
  }


}