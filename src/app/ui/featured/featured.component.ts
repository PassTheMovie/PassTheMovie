import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  @Input() feature: any;
  rating;

  classes = "";

  constructor(public _router: Router) { }

  ngOnInit() {
    this.rating = this.feature.vote_average * 10;
    this.checkRating();
  }

  ngAfterContentInit() {

  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  checkRating() {
    if (this.rating < 20) {
      this.classes = "danger";
    } else if (this.rating < 60) {
      this.classes = "warning";
    } else if (this.rating < 80) {
      this.classes = "info";
    } else {
      this.classes = "success";
    }
  }

}
