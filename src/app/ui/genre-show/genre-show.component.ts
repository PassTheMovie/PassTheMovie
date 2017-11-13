import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-genre-show',
  templateUrl: './genre-show.component.html',
  styleUrls: ['./genre-show.component.css']
})

export class GenreShowComponent implements OnInit {
  id: string;
  genres: any;
  genreCategory: string;
  movies;
  rating;
  classes = "";
  page = 1;
  previous = true;

  constructor(
    public _genreService: MoviesService,
    public _router: Router,
    public _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];

    this._genreService.genreList(this.id)
      .subscribe(
      res => { this.movies = res },
    );

    this._genreService.getGenre()
      .subscribe(
      res => {
        this.genres = res,
          this.genreName()
      },
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  genreName() {
    for (let i = 0; i < this.genres.length; i++) {

      if (this.genres[i].id == this.id) {
        this.genreCategory = this.genres[i].name;
      }
    }
  }

  prev() {
    this.page -= 1;
    this._genreService.genreListNext(this.id, this.page)
      .subscribe(
      res => { this.movies = res },
    );
  }

  next() {
    this.page += 1;
    this._genreService.genreListNext(this.id, this.page)
      .subscribe(
      res => { this.movies = res },
    );
    this.previous = false;
  }


}
