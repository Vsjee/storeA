import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types';
import { MatCardModule } from '@angular/material/card';
import { productInit } from 'src/app/models';
import { MatButtonModule } from '@angular/material/button';
import { ProductsRoutingModule } from 'src/app/modules/products/products-routing.module';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ProductsRoutingModule],
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() productData: IProduct = productInit;
}
