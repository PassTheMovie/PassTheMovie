import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  latest;
  page = 1;
  previous = true;
  rating;
  classes = "";

  constructor(
    private _carouselService: MoviesService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.popular();
  }

  popular() {
    this._carouselService.playingNow()
      .subscribe(
      res => { this.latest = res },
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -= 1;
    this._carouselService.playingNowNext(this.page)
      .subscribe(
      res => { this.latest = res },
    );
  }

  next() {
    this.page += 1;
    this._carouselService.playingNowNext(this.page)
      .subscribe(
      res => { this.latest = res },
    );
    this.previous = false;
  }

}
