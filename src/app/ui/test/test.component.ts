import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase,
    public auth: AuthService,
  ) { }
  
  ngOnInit() {
    var user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
      uid = user.uid;
    }

    var db = firebase.database();
    var ref = db.ref(`users/${uid}`);
    
    ref.child('secondmovie').on("value", function(snapshot) {
      var firstid = console.log(snapshot.val());
      
  });
    
    this.coursesObservable = this.getCourses(`/users`);  
    

  }


  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}