import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  featured: any;
  genres: any;

  constructor(
    private _carouselService: MoviesService,
    private _genreService: MoviesService,
    public _router: Router,
    public _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getSlides();
    this.getMovieGenre();
  }

  getSlides() {
    this._carouselService.featured()
      .subscribe(
        res => { this.featured = res },
    );
  }

  getMovieGenre() {
    this._genreService.getGenre()
      .subscribe(
        res => { this.genres = res },
    );
  }

  onOpenGenre(id) {
    this._router.navigate(['/genre/' + id]);
  }

}
