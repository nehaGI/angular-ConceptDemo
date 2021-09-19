import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CusDirective} from './cus.directive';
import {BgColorDirective} from './cus-attribute.directive';
import {IfDirective} from './cus-structure.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,CusDirective,IfDirective,BgColorDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
