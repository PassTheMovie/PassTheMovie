import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
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


var user = firebase.auth().currentUser;
var uid;
if(user != null){
  uid = user.uid;
}

var db = firebase.database();
var ref = db.ref(`/users/`);

var usersRef = ref.child(`${uid}/`);


if(id=="346364")
  usersRef.update({
    "firstmovie": "346364"
  });

else if(id=="8844")
  usersRef.update({
    "secondmovie": "8844"
  });

else if(id=="141052")
  usersRef.update({
    "thirdmovie": "141052"
  });

else if(id=="354912")
  usersRef.update({
    "fourthmovie": "354912"
  });


//it = 346364 jumanji = 8844 justice league= 141052 coco= 354912


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


