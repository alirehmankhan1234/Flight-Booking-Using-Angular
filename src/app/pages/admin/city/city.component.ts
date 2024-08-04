import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {

  cityList: any[] = [{cityName: "karachi"}]

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getAllCity();
  }
  addNew(){
    
  }

  getAllCity(){
    this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity").subscribe((res:any)=>{
      this.cityList = res.data
      this.cityList.forEach(e=>{
        e.isEdit = false
      })
    })
  }

}
