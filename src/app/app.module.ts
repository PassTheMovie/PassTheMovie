//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing/routing.module';
//components
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './ui/app-navbar/app-navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home/home.component';
import { MovieDataComponent } from './ui/movie-data/movie-data.component';
import { UserDataComponent } from './ui/user-data/user-data.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//services
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    HomeComponent,
    MovieDataComponent,
    UserDataComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RoutingModule
  ],
  providers: [AuthService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
