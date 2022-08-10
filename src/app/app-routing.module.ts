import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './auth-components/blank/blank.component';
import { ErrorpageComponent } from './auth-components/errorpage/errorpage.component';
import { SigninComponent } from './auth-components/signin/signin.component';
import { SignupComponent } from './auth-components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './themes/header/header.component';
import { ThemeComponent } from './themes/theme/theme.component';

const routes: Routes = [
  {
    path:'signin',
    component:SigninComponent,
  },
  
  {
    path:'signup',
    component:SignupComponent
  },
  
  
  
  
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      
    ]
  },
 
  {
        path:'errorpage',
        component:ErrorpageComponent,
      },
      {
        path:'blank',
        component:BlankComponent,
      },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
