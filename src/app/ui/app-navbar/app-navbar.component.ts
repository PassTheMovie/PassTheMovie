import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],

  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]


})
export class AppNavbarComponent implements OnInit {

  closeResult: string;

  constructor(public auth: AuthService,
    private router: Router,
    private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  ngOnInit() {
  }

  signInWithGithub(): void {
    this.auth.githubLogin()
      .then(() => this.afterSignIn());
  }
  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }
  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }
  signInWithTwitter(): void {
    this.auth.twitterLogin()
      .then(() => this.afterSignIn());
  }
  signInAnonymously() {
    this.auth.anonymousLogin()
      .then(() => this.afterSignIn());
  }
  private afterSignIn(): void {
    this.router.navigate(['user']);
  }
  logout() {
    this.auth.signOut();
  }
}



