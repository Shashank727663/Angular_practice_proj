import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {StudentsService} from './students.service';
import {CoursesService} from './courses.service';
import { RegristrationService } from './regristration.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { DataComponent } from './data/data.component';
import {FormsModule} from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { PeakyBlindersComponent } from './peaky-blinders/peaky-blinders.component';
import { ContributionComponent } from './contribution/contribution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalComponent } from './local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    HomeComponent,
    DataComponent,
    NewsComponent,
    PeakyBlindersComponent,
    ContributionComponent,
    LocalComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService  , CoursesService , RegristrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
