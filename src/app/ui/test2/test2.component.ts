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
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  movies: any;

  constructor(
    public _movieRecomService: MoviesService

  ) { }

  ngOnInit() {
    this._movieRecomService.getsim(this.deneme())
      .subscribe(
      res => { this.movies = res },

    );
    console.log(this.deneme());
  }
  deneme() {
    var myArray = [346364,181808,354912,141052];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;

  }
}
