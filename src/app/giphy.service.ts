import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http:HttpClient) { }
  getTrends(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=ftRLl0L8F9M2rgxa1DT0CAeXQfWiIkSD&limit=25&rating=g`);
  }
}