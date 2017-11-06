import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MovieDetailComponent } from './ui/movie-detail/movie-detail.component';
import { MovieSearchResultComponent } from './ui/movie-search-result/movie-search-result.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieSearchResultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [AuthService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
