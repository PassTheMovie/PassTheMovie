import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  private apikey = '&api_key=a40affbd4f3a7e7768e83e7262601491';
  private baseUrl = 'https://api.themoviedb.org/3/';
  private movie = 'movie/'
  private sortByPopularity = '&sort_by=popularity.desc';
  private jsonpCallback = '?callback=JSONP_CALLBACK';
  public sharedSearchResult: Array<Object> = [];

  constructor(private jsonp: Jsonp) {
  }


  public getSharedSearchResult() {
    return this.sharedSearchResult;
  }

  public setSharedSearchResult(searchResult) {
    this.sharedSearchResult = searchResult;
  }

  public getPopularMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'popular' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public getTopRatedMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'top_rated' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public getUpComingMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'upcoming' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public getNowPlayingMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'now_playing' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public searchMovies(query) {
    return this.jsonp.get(this.baseUrl + 'search/movie' + this.jsonpCallback + '&query=' + query + this.sortByPopularity + this.apikey)
      .map(result => result.json())
  }

  public getMovieDetails(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public getSimilarMovies(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + '/similar' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public getMovieReviews(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + '/reviews' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  public sharedSearchMovies(searchQuery) {
    this.searchMovies(searchQuery)
      .subscribe(response => {
        this.sharedSearchResult = response.results;
      })
  }


}