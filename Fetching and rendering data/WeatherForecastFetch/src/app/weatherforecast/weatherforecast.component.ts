import { Component } from '@angular/core';
import { WeatherForecastModel } from '../Models/WeatherForecast';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrl: './weatherforecast.component.css'
})
export class WeatherforecastComponent {

  weatherData:WeatherForecastModel[]=[];

  constructor(private weatherService:WeatherforecastService){

  }

  ngOnInit(){
    this.weatherService.getWeatherForecast()
    .subscribe({
      next:(data:WeatherForecastModel[])=>{
        this.weatherData=data;
        console.log(this.weatherData);
      },
      error:(error)=>{
        console.error('Error fetching data:',error);     
      },
      complete:()=>{
        console.log('Data fetching completed');
      }
    })
  }
}
