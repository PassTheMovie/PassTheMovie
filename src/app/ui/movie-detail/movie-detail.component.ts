import { Component, OnInit, OnChanges } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movie: any = {};

  constructor(
    public moviesService: MoviesService,
    public route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.moviesService.getMovieDetails(id))
      .subscribe(result => this.movie = result);
  }

}
