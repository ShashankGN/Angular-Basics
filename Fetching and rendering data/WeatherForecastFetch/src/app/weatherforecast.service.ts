import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecastModel } from './Models/WeatherForecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  baseApiUrl:string='http://localhost:5048';
  constructor(private http:HttpClient) { }

  getWeatherForecast():Observable<WeatherForecastModel[]>{
    return this.http.get<WeatherForecastModel[]>(`${this.baseApiUrl}/weatherforecast`);
  }

  
}
