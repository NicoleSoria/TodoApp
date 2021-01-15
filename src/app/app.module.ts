import { FilterPipe } from './filter/filter.pipe';

import { environment } from './../environments/environment';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducers';
import {APP_BASE_HREF} from '@angular/common';  

@NgModule({
  declarations: [		
    AppComponent,
      FooterComponent,
      TodoComponent,
      TodosListComponent,
      TodoItemComponent,
      TodoFooterComponent,
      TodoAddComponent,
      FilterPipe
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  exports: [FilterPipe],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
