import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppSettings } from './../config/app.setting';

import { Carousel } from './../ui/carousel/Carousel';

@Injectable()
export class MoviesService {

  private carouselUrl: string = './assets/api/carousel_items.json';

  private searchString;


  private _navItemSource = new BehaviorSubject<string>(null);
  navItem$ = this._navItemSource.asObservable();
  changeNav(query: string) {
    this._navItemSource.next(query);
  }

  constructor(
    private _jsonp: Jsonp,
    private _http: Http
  ) { }

  search(search) {
    return this._jsonp
      .request(AppSettings.API_ENDPOINT + 'search/movie' + AppSettings.API_KEY + '&query=' + search + '&callback=JSONP_CALLBACK')
      .map((res: Response) => {
        const data = res.json().results;
        return data;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getMovieDetails(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/' + id + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .catch(this.handleError);
  }

  getMovieTrailer(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/videos' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }

  getMovieCast(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/credits' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.cast;
      })
      .catch(this.handleError);
  }

  getrecom(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/recommendations' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getMovieCrew(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/credits' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.crew;
      })
      .catch(this.handleError);
  }

  getPersonData(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'person/' + id + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }

  getReview(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/reviews' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }

  getPersonDetails(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'person/' + id + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      //.do(data => console.log(data))
      .catch(this.handleError);
  }

  getPersonMovies(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'person/' + id + '/movie_credits' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      //.do(data => console.log(data))
      .catch(this.handleError);
  }

  getGenre() {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'genre/movie/list' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.genres;
      })
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  genreList(id) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'genre/' + id + '/movies' + AppSettings.API_KEY + '&sort_by=created_at.asc')
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }
  genreListNext(id, page) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'genre/' + id + '/movies' + AppSettings.API_KEY + '&sort_by=created_at.asc' + '&page=' + page)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }

  featured(): Observable<Carousel[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/upcoming' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }
  featuredPage(page): Observable<Carousel[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/upcoming' + AppSettings.API_KEY + '&page=' + page)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .catch(this.handleError);
  }

  playingNow() {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/popular' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  playingNowNext(page) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/popular' + AppSettings.API_KEY + '&page=' + page)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  topRated() {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/top_rated' + AppSettings.API_KEY)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  topRatedPage(page) {
    return this._http
      .get(AppSettings.API_ENDPOINT + 'movie/top_rated' + AppSettings.API_KEY + '&page=' + page)
      .map((res: Response) => {
        const data = res.json();
        return data.results;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
    return Observable.throw(msg);
  }

}
