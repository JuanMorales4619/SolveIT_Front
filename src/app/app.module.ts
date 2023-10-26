import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile/profile.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';


const routes: Routes = [
  {
    path:'publication/create',
    component:CreatePublicationComponent
  }
  ,
  {
    path:'regitro',
    component:RegistroComponent
  }
  ,
  {
    path:'',
    component:HomePageComponent
  }
  ,
  {
    path: 'profile',
    component: ProfileComponent
  }
  ,
  {
    path:' ',
    pathMatch: 'prefix',
    redirectTo: 'home'
  }
  ,
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: 'home'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePublicationComponent,
    HomePageComponent,
    RegistroComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProfileService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
