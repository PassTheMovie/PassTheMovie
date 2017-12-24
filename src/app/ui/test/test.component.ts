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
  id : string;
  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase,
    public auth: AuthService,
    public _movieRecomService: MoviesService
  ) { }
  
  ngOnInit() {
    
    
    /*ref.child('secondmovie').on("value", function(snapshot) {
      var firstid = console.log(snapshot.val());
      
  });*/

  //console.log(this.firstmovie, "DENEME");
  
  var user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
      uid = user.uid;
    }

    var db = firebase.database();
    var ref = db.ref('users');
    ref.on('value', this.gotData, this.errData);
    
    
var x = this.deneme
    this._movieRecomService.getrecom(this.deneme())
    .subscribe(
      res => { this.movies = res },
    );
  }


  gotData(data){  
    var movies = data.val();
    var keys = Object.keys(movies);
    
    for (var i = 0; i<keys.length; i++){
      var k = keys[i];
      var firstmovie = movies[k].firstmovie;     
      var secondmovie = movies[k].secondmovie;
    }
      
    
  }

  deneme(){
    return 181808;
  }

  errData(err){
    console.log(err);
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}