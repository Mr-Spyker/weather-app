import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { enviroment } from 'src/enviroments/enviroment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(enviroment.weatherApiBaseUrl,
      {
      headers:new HttpHeaders()
      .set(enviroment.XRapidAPIHostHeaderName,enviroment.XRapidAPIHostHeaderValue)
      .set(enviroment.XRapidAPIKeyHeaderName,
        enviroment.XRapidAPIKeyHeaderValue),

        params: new HttpParams()
        .set('query',cityName)
        .set('units','metric')
        .set('mode','json')

    })
  }
}
