import { Component } from '@angular/core';

import {categories, Category} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './logic.html',
  styleUrls: ['./logic.css']
})
export class Logic {
  selectedCategory: Category | null = null;


  protected readonly categories = categories;

  onRemove($event: number) {
    this.selectedCategory!.prod_list = this.selectedCategory!.prod_list.filter(product => product.id != $event);

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
