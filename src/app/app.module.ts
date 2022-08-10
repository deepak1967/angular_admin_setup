import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './themes/theme/theme.component';
import { HeaderComponent } from './themes/header/header.component';
import { FooterComponent } from './themes/footer/footer.component';
import { SidebarComponent } from './themes/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RecentSalesComponent } from './recent-sales/recent-sales.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { BlankComponent } from './auth-components/blank/blank.component';
import { ErrorpageComponent } from './auth-components/errorpage/errorpage.component';
import { MctComponent } from './components/mct/mct.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    RecentSalesComponent,
    SignupComponent,
    BlankComponent,
    ErrorpageComponent,
    MctComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
