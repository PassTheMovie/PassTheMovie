import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit, DoCheck {
  id: string;
  movie: any;
  trailer;
  cast;
  crew;
  review;
  rating;
  trailerPath;
  closeResult: string;
  classes = "";

  constructor(
    public _movieDetailsService: MoviesService,
    public _router: Router,
    public _route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];

    this._movieDetailsService.getMovieDetails(this.id)
    .subscribe(
      res => { this.movie = res },
    );
    this.getTrailer();
    this.getCast();
    this.getCrew();
    this.getMovieReview();
  }

  ngDoCheck() {
    this.rating = this.movie.vote_average * 10;
    this.checkRating();
  }

  getTrailer() {
    this._movieDetailsService.getMovieTrailer(this.id)
    .subscribe(
      res => { this.trailer = res },
    );
  }

  getCast() {
    this._movieDetailsService.getMovieCast(this.id)
    .subscribe(
      res => { this.cast = res },
    );
  }

  getCrew() {
    this._movieDetailsService.getMovieCrew(this.id)
    .subscribe(
      res => { this.crew = res },
    );
  }

  getMovieReview() {
    this._movieDetailsService.getReview(this.id)
    .subscribe(
      res => { this.review = res },
    );
  }

  checkRating() {

    if(this.rating < 20) {
      this.classes = "danger";
    } else if(this.rating < 60) {
      this.classes = "warning";
    } else if(this.rating < 80) {
      this.classes = "info";
    } else {
      this.classes = "success";
    }
  }

  modal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
