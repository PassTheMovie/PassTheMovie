import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDataComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

}
