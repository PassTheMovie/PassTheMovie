import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.signOut();
  }

}
