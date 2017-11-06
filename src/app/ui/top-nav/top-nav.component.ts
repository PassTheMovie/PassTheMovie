import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MoviesService } from '../../services/movies.service';
import { Jsonp, Http } from '@angular/http';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  public autocompleteMoviesNavBar: Array<Object> = [];
  public searchQueryNavBar: string;
  constructor(public auth: AuthService, public http: Http, public moviesService: MoviesService, public jsonp: Jsonp) { }

  ngOnInit() {
  }
  logout() {
    this.auth.signOut();
  }

  public searchMoviesNavBar() {
    console.log('searchMoviesNavBar: ' + this.searchQueryNavBar)
    this.moviesService.sharedSearchMovies(this.searchQueryNavBar);
  }

  public autocompleteSearchMoviesNavBar() {
    if (this.searchQueryNavBar.length > 0) {
      this.moviesService.searchMovies(this.searchQueryNavBar)
        .subscribe(response => {
          console.log('autocompleteSearchMoviesNavBar')
          console.log(response.results)
          this.autocompleteMoviesNavBar = response.results;
        })
    } else {
      this.autocompleteMoviesNavBar = [];
    }
  }

  public selectNavBar(movie) {
    this.searchQueryNavBar = movie;
    this.autocompleteMoviesNavBar = [];
  }
}
