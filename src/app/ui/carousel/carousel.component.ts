import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from './../../services/movies.service';
import { Carousel } from './../carousel/Carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: any;

  constructor(
    private _carouselService: MoviesService,
    public _router: Router
  ) { }
  ngOnInit() {
    this.getSlides();
  }
  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }
  getSlides() {
    this._carouselService.featured()
      .subscribe(
      res => { this.slides = res },
    );
  }
}
