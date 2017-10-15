import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
    private router: Router) { }


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
    this.router.navigate(['/']);
  }
  logout() {
    this.auth.signOut();
  }
}
