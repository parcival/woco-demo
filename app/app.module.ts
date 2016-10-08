import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyNgInclude } from '../common/myNgInclude.component.ts';
import { AppComponent }  from './app.component';
import { AlertModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [ BrowserModule, AlertModule, AccordionModule ],
  declarations: [ AppComponent, MyNgInclude ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
