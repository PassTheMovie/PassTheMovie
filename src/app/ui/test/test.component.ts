import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  movie: any;
  movies: any;
  id: string;
  constructor(private db: AngularFireDatabase,
    public auth: AuthService,
    public _movieRecomService: MoviesService
  ) { }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    var db = firebase.database();
    var ref = db.ref('users');
    ref.on('value', this.gotData, this.errData);    
    this._movieRecomService.getrecom(this.deneme())
      .subscribe(
      res => { this.movies = res },

    );
  }

  gotData(data) {
    var movies = data.val();
    var keys = Object.keys(movies);

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var firstmovie = movies[k].firstmovie;
      var secondmovie = movies[k].secondmovie;
    }
  }

  deneme() {
    var myArray = [346364,181808,354912,141052];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
  }

  errData(err) {
    console.log(err);
  }
}