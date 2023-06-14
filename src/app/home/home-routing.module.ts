import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      { 
        path: '', 
        component: SignInComponent
      },
      { 
        path: 'signup', 
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] //Quem importar a classe AppRoutingModule ganha também o que estiver aqui
})
export class HomeRoutingModule { }
