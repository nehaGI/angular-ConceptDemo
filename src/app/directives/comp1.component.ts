import {Component,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'comp-1',
  templateUrl:'./comp1.component.html',
  styleUrls: ['/comp1.component.css']
})
export class Comp1Class {

  movies=[];
 
  mTitle:string="";
  mDirector:string="";

  constructor(private _router:Router,private activateR:ActivatedRoute){
    
  }
  ngOnInit() {
    this.Refresh();
  }
 
  remove(i) {
    this.movies.splice(i,1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }
  trackByFn(index, item) {
    return item.title;
  }

  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }

  goHome(): void {
    this._router.navigate(['home'],{relativeTo:this.activateR});
 

}
}
