import { Component } from '@angular/core';
import { WeatherForecastModel } from './Models/WeatherForecast';
import { WeatherforecastService } from './weatherforecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherForecastFetch';
  show:boolean=false;
  onGetButtonClicked(){
    this.show=true;
  }
}
