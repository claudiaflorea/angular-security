import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuardService } from './auth-guard.service';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  {path : "", component : HomeComponent},
  {path : "Emps", component : EmpsComponent, canActivate : [AuthGuardService] },
  {path : "Depts", component : DeptsComponent, canActivate : [AuthGuardService] },
  {path : "Aboutus", component : AboutusComponent},
  {path : "Details/:id", component : DetailsComponent},
  {path : "Login", component : LoginComponent},  
  {path : "Logout", component : LogoutComponent},  
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path : "**", component : NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
