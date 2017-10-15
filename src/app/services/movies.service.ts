import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  apiKey: string;
  constructor(private _jsonp: Jsonp) {
    this.apiKey = 'a40affbd4f3a7e7768e83e7262601491';
    console.log('MovieService Initialized...')
  }

  getPopular() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=a40affbd4f3a7e7768e83e7262601491')
      .map(res => res.json());
  }
}