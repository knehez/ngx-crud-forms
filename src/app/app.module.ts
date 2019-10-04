import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudTableLibModule } from 'ngx-crud-forms';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    CrudTableLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
