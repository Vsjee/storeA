import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services';
import { IProduct } from 'src/app/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: GetProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
