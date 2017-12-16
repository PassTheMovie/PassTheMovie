import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';



import { AuthService } from '../../services/auth.service';
//import {add} from './deneme';
//import {saveData} from './deneme';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  myEvent(event){

  console.log("event");
  var database = firebase.database();
    var ref = database.ref('ilkfilm');
    var data = {
      name: "Kerem",
     score: 1
    }
    console.log(data);
    ref.push(data);


  }

  constructor(
    public auth: AuthService,
    private router: Router
  ) {

   }
  ngOnInit() {

  }

}





//JS
