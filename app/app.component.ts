import { Component, NgModule } from '@angular/core';
import { MyNgInclude } from '../common/myNgInclude.component.ts';
import { BrowserModule } from '@angular/platform-browser'

// import ng2-bootstrap alerts module
import { AlertModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

let w:any = window;

if (w && w.__theme === 'bs4') {
  Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css' ]
})
export class AppComponent {
  title = 'Minimal NgModule';
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
