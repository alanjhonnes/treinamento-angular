import {SearchPageComponent} from './search/search-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {SearchComponent} from './search/search.component';
import {SearchService} from './search/search.service';

import { MaterialModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'search',
          component: SearchPageComponent
        },
        {
          path: 'search/:term',
          component: SearchPageComponent
        }
      ]
    )
  ],
  providers: [
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
