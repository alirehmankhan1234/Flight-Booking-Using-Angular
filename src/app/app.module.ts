import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    routes
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
