import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../auth.guard';
//components
import { AppComponent } from '../app.component';
import { AppNavbarComponent } from '../ui/app-navbar/app-navbar.component';
import { HomeComponent } from '../ui/home/home.component';

import { AuthGuard } from '../services/auth.guard';
import { UserDataComponent } from '../ui/user-data/user-data.component';

const routes: Routes = [
 { path: '', component: HomeComponent, },
 { path: 'user', component: UserDataComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
