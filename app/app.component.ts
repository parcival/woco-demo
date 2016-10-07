import { Component } from '@angular/core';
import { MyNgInclude } from '../common/myNgInclude.component.ts';

@Component({
  selector: 'my-app',
  template: `
    <h1>Voorbeeldje van geinjecteerde content</h1>
    <div>
      <p>Templates included:</p>

      <my-ng-include src="tpls/info1.html"></my-ng-include>
      <my-ng-include src="tpls/info2.html"></my-ng-include>

    </div>`,
  directives: [MyNgInclude],
})
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
