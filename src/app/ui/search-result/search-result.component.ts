import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, AfterViewInit {
  @Input() searchResult;
  rating;

  classes = "";

  constructor( public _router: Router ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  checkRating() {
    if(this.rating < 20) {
      this.classes = "danger";
    } else if(this.rating < 40) {
      this.classes = "warning";
    } else if(this.rating < 80) {
      this.classes = "info";
    } else {
      this.classes = "success";
    }
  }

}
