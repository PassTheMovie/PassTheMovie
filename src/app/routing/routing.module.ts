import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//components
import { AppComponent } from '../app.component';
import { HomeComponent } from '../ui/home/home.component';
import { HeaderComponent } from '../ui/header/header.component';
import { FooterComponent } from '../ui/footer/footer.component';
import { SearchComponent } from '../ui/search/search.component';
import { CarouselComponent } from '../ui/carousel/carousel.component';
import { FeaturedComponent } from '../ui/featured/featured.component';
import { SearchResultComponent } from '../ui/search-result/search-result.component';
import { SearchMoviesComponent } from '../ui/search-movies/search-movies.component';
import { ProgressComponent } from '../ui/progress/progress.component';
import { GenreShowComponent } from '../ui/genre-show/genre-show.component';
import { MovieDetailsComponent } from '../ui/movie-details/movie-details.component';
import { CastComponent } from '../ui/cast/cast.component';
import { MoviesComponent } from '../ui/movies/movies.component';
import { MoviesTopComponent } from '../ui/movies-top/movies-top.component';
import { MoviesUpcomingComponent } from '../ui/movies-upcoming/movies-upcoming.component';
import { CastDetailsComponent } from '../ui/cast-details/cast-details.component'
import { LoginComponent } from '../ui/login/login.component';
import { UserDataComponent } from '../ui/user-data/user-data.component';

import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserDataComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchMoviesComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'genre/:id', component: GenreShowComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'cast/:id', component: CastDetailsComponent },
  { path: 'movies/popular', component: MoviesComponent },
  { path: 'movies/top', component: MoviesTopComponent },
  { path: 'movies/upcoming', component: MoviesUpcomingComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard]
})
export class RoutingModule { }
