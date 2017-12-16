//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { RoutingModule } from './routing/routing.module';
//services
import './services/rxjs.extension';
import { MoviesService } from './services/movies.service';
import { AuthService } from './services/auth.service';
import { TestService } from './services/test.service';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home/home.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SearchComponent } from './ui/search/search.component';
import { CarouselComponent } from './ui/carousel/carousel.component';
import { FeaturedComponent } from './ui/featured/featured.component';
import { SearchResultComponent } from './ui/search-result/search-result.component';
import { SearchMoviesComponent } from './ui/search-movies/search-movies.component';
import { ProgressComponent } from './ui/progress/progress.component';
import { GenreShowComponent } from './ui/genre-show/genre-show.component';
import { MovieDetailsComponent } from './ui/movie-details/movie-details.component';
import { CastComponent } from './ui/cast/cast.component';
import { MoviesComponent } from './ui/movies/movies.component';
import { MoviesTopComponent } from './ui/movies-top/movies-top.component';
import { MoviesUpcomingComponent } from './ui/movies-upcoming/movies-upcoming.component';
import { CastDetailsComponent } from './ui/cast-details/cast-details.component'
import { LoginComponent } from './ui/login/login.component';
import { UserDataComponent } from './ui/user-data/user-data.component';
import { RecommendationComponent } from './ui/recommendation/recommendation.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { TestComponent } from './ui/test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    FeaturedComponent,
    SearchResultComponent,
    SearchMoviesComponent,
    ProgressComponent,
    GenreShowComponent,
    MovieDetailsComponent,
    CastComponent,
    MoviesComponent,
    MoviesTopComponent,
    MoviesUpcomingComponent,
    CastDetailsComponent,
    LoginComponent,
    UserDataComponent,
    RecommendationComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoundProgressModule,
    JsonpModule,
    NgbModule.forRoot(),
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  providers: [
    MoviesService,
    AuthService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
