import { Component } from '@angular/core';

import {initialProducts} from '../initialProducts';

@Component({
  selector: 'app-product-list',
  templateUrl: './logic.html',
  styleUrls: ['./logic.css']
})
export class Logic {
  products = [...initialProducts];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
