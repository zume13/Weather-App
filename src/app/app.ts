import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Forecast } from './Components/forecast/forecast';
import { CurrentWeather } from './Components/current-weather/current-weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Forecast, CurrentWeather],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Weather_App';
}
