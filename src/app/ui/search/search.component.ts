import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from './../../services/movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search;

  constructor(
    private _searchService: MoviesService,
    public _router: Router,
    private _navService: MoviesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    this._navService.changeNav(this.search);

    this.search = "";
    this._router.navigate(['/search']);
  }
}

