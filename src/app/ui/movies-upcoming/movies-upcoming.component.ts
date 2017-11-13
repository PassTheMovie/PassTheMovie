import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movies-upcoming',
  templateUrl: './movies-upcoming.component.html',
  styleUrls: ['./movies-upcoming.component.css']
})

export class MoviesUpcomingComponent implements OnInit {
  upcoming;
  page = 1;
  previous = true;

  constructor(
    private _carouselService: MoviesService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.upcomingMovies();
  }

  upcomingMovies() {
    this._carouselService.featured()
      .subscribe(
      res => { this.upcoming = res },
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -= 1;
    this._carouselService.featuredPage(this.page)
      .subscribe(
      res => { this.upcoming = res },
    );
  }

  next() {
    this.page += 1;
    this._carouselService.featuredPage(this.page)
      .subscribe(
      res => { this.upcoming = res },
    );
    this.previous = false;
  }

}
