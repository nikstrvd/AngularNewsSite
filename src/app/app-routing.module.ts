import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {EntertainmentnewsComponent} from './entertainmentnews/entertainmentnews.component';
import{GeneralnewsComponent} from './generalnews/generalnews.component';
import{HealthnewsComponent} from './healthnews/healthnews.component';
import{SciencenewsComponent} from './sciencenews/sciencenews.component';
import{SportsnewsComponent} from './sportsnews/sportsnews.component';

const routes: Routes = [
  {path: '', component:TopheadingComponent},
  {path: 'tech', component:TechnewsComponent}, 
  {path: 'businessnews', component:BusinessnewsComponent},
  {path: 'entertainmentnews', component:EntertainmentnewsComponent},
  {path: 'generalnews', component:GeneralnewsComponent},
  {path: 'healthnews', component:HealthnewsComponent},
  {path: 'sciencenews', component:SciencenewsComponent},
  {path: 'sportsnews', component:SportsnewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
