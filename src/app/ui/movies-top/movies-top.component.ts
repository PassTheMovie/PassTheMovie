import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movies-top',
  templateUrl: './movies-top.component.html',
  styleUrls: ['./movies-top.component.css']
})

export class MoviesTopComponent implements OnInit {
  topRated;
  page = 1;
  previous = true;

  constructor(
    private _carouselService: MoviesService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.top();
  }

  top() {
    this._carouselService.topRated()
      .subscribe(
      res => { this.topRated = res },
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -= 1;
    this._carouselService.topRatedPage(this.page)
      .subscribe(
      res => { this.topRated = res },
    );
  }

  next() {
    this.page += 1;
    this._carouselService.topRatedPage(this.page)
      .subscribe(
      res => { this.topRated = res },
    );
    this.previous = false;
  }


}
