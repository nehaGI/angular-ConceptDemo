import { RouterModule ,Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import { RoutingComponent} from './Routes/routing.component';
import {PipeComponent} from './pipes/pipe.component';
import {ErrorComponent} from './Error/error.component';
import { Comp1Class } from './directives/comp1.component';

import { HomeComponent } from './home/home.component';
import { SharedComponent } from './sharedComponent/shared.component';

const route1 :Routes =[
  {path:'home',component:HomeComponent} ,
 
{path:'routes',component:RoutingComponent},
{path:'pipes',component:PipeComponent},
{path:'pipes/:name',component:SharedComponent},
{path:'directives',component:Comp1Class},

{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:ErrorComponent}
]

@NgModule({
imports: [RouterModule.forRoot(route1)],
exports: [RouterModule]
})
export class AppRoute {

}