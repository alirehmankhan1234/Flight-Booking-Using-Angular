import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { CityComponent } from './pages/admin/city/city.component';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    NewFlightComponent,
    AllFlightsComponent,
    BookingsComponent,
    AirportComponent,
    CityComponent,
    SearchComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
