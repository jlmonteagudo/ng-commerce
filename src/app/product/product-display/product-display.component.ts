import { Component, Input } from '@angular/core';
import { Product } from '../../services/product/product';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  @Input() product: Product;
}
