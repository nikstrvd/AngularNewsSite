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

  entertainmentnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=85ae8ddaebaa491b88a22f211c393fba";

  generalnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=85ae8ddaebaa491b88a22f211c393fba";

  sportsnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=85ae8ddaebaa491b88a22f211c393fba";
  
  sciencenewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=85ae8ddaebaa491b88a22f211c393fba";

  healthnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=85ae8ddaebaa491b88a22f211c393fba";

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

  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentnewsApiUrl);
  }

  generalNews():Observable<any>
  {
    return this._http.get(this.generalnewsApiUrl);
  }

  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsnewsApiUrl);
  }

  scienceNews():Observable<any>
  {
    return this._http.get(this.sciencenewsApiUrl);
  }

  healthNews():Observable<any>
  {
    return this._http.get(this.healthnewsApiUrl);
  }
}
