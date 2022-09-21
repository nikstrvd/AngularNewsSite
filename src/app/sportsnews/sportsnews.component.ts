import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  sportsnewsDisplay: any = [];

  ngOnInit(): void {
    this._services.sportsNews().subscribe((result)=>
    {
      console.log(result);
      this.sportsnewsDisplay = result.articles;
    })
  }

}
