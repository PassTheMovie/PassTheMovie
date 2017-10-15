import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
//services
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { HomeComponent } from './ui/home/home.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//modules
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AuthService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
