import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {
  @Input() cast: any;

  constructor(public _router: Router) { }

  ngOnInit() {
  }

  personDetails(id) {
    this._router.navigate(['/cast/' + id]);
  }

}
