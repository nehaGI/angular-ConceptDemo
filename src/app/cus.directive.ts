import {Directive,Input,OnInit,ElementRef,ViewContainerRef, HostListener,Renderer2}from'@angular/core';

@Directive({
  selector:'[ttToolTip]'
})
export class CusDirective {
  
  @Input() toolTipText:string;
  elToolTip:any;
  constructor(private eleRef:ElementRef, private renderer: Renderer2){

  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    if (!this.elToolTip) { this.showHint(); }
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    if (this.elToolTip) { this.removeHint(); }
  }
 
  

showHint(){
//creating a span
this.elToolTip=this.renderer.createElement('span');
const text =this.renderer.createText(this.toolTipText);//creating text node
this.renderer.appendChild(this.elToolTip,text);//appending text node in span

this.renderer.appendChild(document.body,this.elToolTip);//appending sapn in body
this.renderer.addClass(this.elToolTip,'tool');//adding a css class in span element

let hostPosition =this.eleRef.nativeElement.getBoundingClientRect();//getting position of host element

let top =hostPosition.bottom+10; //defining position of tool tip
let left =hostPosition.left;

//adding style to newly created toolTipText
this.renderer.setStyle(this.elToolTip,'top',`${top}px`);
this.renderer.setStyle(this.elToolTip,'left',`${left}px`);

}
removeHint() {
  this.renderer.removeClass(this.elToolTip,'tooltip');
  this.renderer.removeChild(document.body,this.elToolTip);
  this.elToolTip=null;

}

}