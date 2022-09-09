import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentSemesterComponent } from './current-semester/current-semester.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'current', component: CurrentSemesterComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
