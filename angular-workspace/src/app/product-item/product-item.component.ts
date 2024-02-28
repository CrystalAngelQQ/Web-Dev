import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
@Input() product!: Product;
@Output() removeSignal: EventEmitter<number> = new EventEmitter();

    share(link:string) {
    window.open(`https://wa.me/?text=${link}`, '_blank');
  }

  kaspiStore(link:string) {
    window.open(link, '_blank');
  }

  remove(id: number) {
    this.removeSignal.emit(id);
  }

  addLike(product: Product){
      product.likes +=1;
  }
}
