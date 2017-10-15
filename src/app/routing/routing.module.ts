import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
//components
import { AppComponent } from '../app.component';
import { LoginComponent } from '../ui/login/login.component';
import { TopNavComponent } from '../ui/top-nav/top-nav.component';
import { HomeComponent } from '../ui/home/home.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: '', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
