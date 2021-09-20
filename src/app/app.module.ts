import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CusDirective} from './cus.directive';
import {BgColorDirective} from './cus-attribute.directive';
import {IfDirective} from './cus-structure.directive';
import {Comp1Class} from './directives/comp1.component';
import { AppRoute } from './app.route';
import { RoutingComponent } from './Routes/routing.component';
import { PipeComponent } from './pipes/pipe.component';
import { ErrorComponent } from './Error/error.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { SharedComponent } from './sharedComponent/shared.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoute],
  declarations: [ AppComponent, HelloComponent,CusDirective,IfDirective,BgColorDirective,Comp1Class,RoutingComponent,PipeComponent,ErrorComponent,HomeComponent,SharedComponent],
  providers:[MovieService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
