import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {MoviesService} from './../../services/movies.service';
@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {
  search;
  subscription;
  searchResult;
  display: boolean = false;

  constructor(
    private _searchService: MoviesService,
    public _router: Router,
    private _navService: MoviesService
    ) {}

  ngOnInit() {
    this.subscription = this._navService.navItem$
      .subscribe(res => { this.search = res });
    if(this.search) {
      this.onSubmit();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this._searchService.search(this.search)
    .subscribe(
      res => { this.searchResult = res },
    );
    this.display = true;
    this.search = "";
  }

}
