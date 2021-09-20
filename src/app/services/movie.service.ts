import { Movie } from "../models/movie";

export class MovieService{

   constructor(){}

  movies = [
    { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
    { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
    { title: 'Warcraft', director: 'Duncan Jones'}
  ];

   getMovies(){
    return this.movies;
  }
}


