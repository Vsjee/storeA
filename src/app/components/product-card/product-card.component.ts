import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types';
import { MatCardModule } from '@angular/material/card';
import { CartItem, productInit } from 'src/app/models';
import { MatButtonModule } from '@angular/material/button';
import { ProductsRoutingModule } from 'src/app/modules/products/products-routing.module';
import { addCartItem } from 'src/app/state';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ProductsRoutingModule],
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() productData: IProduct = productInit;

  constructor(private store: Store) {}

  addToCart() {
    const cartItem: CartItem = {
      id: this.productData.id,
      title: this.productData.title,
      price: this.productData.price,
      brand: this.productData.brand,
      category: this.productData.category,
      cuantity: 1,
    };

    this.store.dispatch(addCartItem({ cartItem: cartItem }));
  }
}
