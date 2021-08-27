import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

type WeatherForecast = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
};

@Component({
  selector: 'nx-angular-net-core-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  weatherForecast$!: Observable<WeatherForecast[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.weatherForecast$ = this.http.get<WeatherForecast[]>(
      'https://localhost:5001/WeatherForecast'
    );
  }
}
