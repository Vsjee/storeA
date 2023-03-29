import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types';
import { MatCardModule } from '@angular/material/card';
import { productInit } from 'src/app/models';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() productData: IProduct = productInit;
}
