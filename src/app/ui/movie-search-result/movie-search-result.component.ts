import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.css']
})
export class MovieSearchResultComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
  }
  public removeSearchResults() {
    this.moviesService.setSharedSearchResult([]);
  }
}
