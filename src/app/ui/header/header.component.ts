import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appName = "PassTheMovie";
  isVisible: boolean = false;

  constructor(public auth: AuthService, ) { }

  ngOnInit() {
  }
  logout() {
    this.auth.signOut();
  }
}
