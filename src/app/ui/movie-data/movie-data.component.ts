import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDataComponent implements OnInit {

  popularMovies: Array<Object>;
  topRatedMovies: Array<Object>;
  upComingMovies: Array<Object>;
  nowPlayingMovies: Array<Object>;
  searchQuery: string;
  autocompleteMovies: Array<Object> = [];


  constructor(public _movieService: MoviesService) {
  }


  ngOnInit() {
    this._movieService.getPopularMovies()
      .subscribe(
      response => {
        this.popularMovies = response.results;
      })
    this._movieService.getTopRatedMovies()
      .subscribe(
      response => {
        this.topRatedMovies = response.results;
      })

    this._movieService.getUpComingMovies()
      .subscribe(
      response => {
        this.upComingMovies = response.results;
      })

    this._movieService.getNowPlayingMovies()
      .subscribe(
      response => {
        this.nowPlayingMovies = response.results;
      })
  }

}