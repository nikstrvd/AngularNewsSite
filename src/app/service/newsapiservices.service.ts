import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=85ae8ddaebaa491b88a22f211c393fba";

  technewsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=85ae8ddaebaa491b88a22f211c393fba";

  businessnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=85ae8ddaebaa491b88a22f211c393fba";

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  topNews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl);
  }

  businessNews():Observable<any>
  {
    return this._http.get(this.businessnewsApiUrl);
  }
}
