import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    AngularMaterialModule, 
    HttpClientModule, 
    SharedModule, 
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      { path: 'register',  component: RegisterComponent},
      { path: '',  component: AppComponent} 
    ]  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
