import {Component, Input} from '@angular/core';
import {Product} from "../initialProducts";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
@Input() product!: Product;

    share(link:string) {
    window.open(`https://wa.me/?text=${link}`, '_blank');
  }

  kaspiStore(link:string) {
    window.open(link, '_blank');
  }
}
