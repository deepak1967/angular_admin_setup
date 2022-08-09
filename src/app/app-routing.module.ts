import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { SigninComponent } from './auth-components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeComponent } from './themes/theme/theme.component';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent,
  },
  {
    path:'signup',
    component:LoginComponent,
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
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
