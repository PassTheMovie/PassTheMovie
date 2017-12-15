import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
declare var $:any;
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
authState: any = null;


get authenticated(): boolean {
  return this.authState !== null;
}

get currentUserId(): string {
  return this.authenticated ? this.authState.uid : '';
}


  myEvent(id){
  //  console.log(id);
    var user = firebase.auth().currentUser;
    var uid;
    if(user != null){
      uid = user.uid;
    }
    

    var database = firebase.database();
    var ref = database.ref(`users/${uid}/firstmovie`);
    var data = {
      id: id,
    }
    console.log(data);
    ref.push(data);

  }
 
  

  latest;
  page = 1;
  previous = true;
  rating;
  classes = "";

  constructor(
    private _carouselService: MoviesService,
    public _router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.popular();
  }

  


  popular() {
    this._carouselService.playingNow()
      .subscribe(
      res => { this.latest = res },
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -= 1;
    this._carouselService.playingNowNext(this.page)
      .subscribe(
      res => { this.latest = res },
    );
  }

  next() {
    this.page += 1;
    this._carouselService.playingNowNext(this.page)
      .subscribe(
      res => { this.latest = res },
    );
    this.previous = false;
  }

  

}


