import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';
import {DataComponent} from './data/data.component';
import {NewsComponent} from './news/news.component';
import {PeakyBlindersComponent } from './peaky-blinders/peaky-blinders.component';
import { LocalComponent } from './local/local.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent }, // Assuming AppComponent is the main view for your application
  { path: 'students', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  {path:'data' , component:DataComponent},
  {path:'api/news' , component : NewsComponent},
  {path:'api/peaky' , component : PeakyBlindersComponent},
  {path:'local' , component : LocalComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
