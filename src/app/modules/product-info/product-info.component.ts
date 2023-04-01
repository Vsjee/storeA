import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInit, publicRoutes } from 'src/app/models';
import { GetProductsService } from 'src/app/services';
import { IProduct } from 'src/app/types';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  product: IProduct = productInit;
  productId = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: GetProductsService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const currRoute = this.route.snapshot.paramMap.get(
      `${publicRoutes.PRODUCT_ID}`
    );

    if (currRoute !== null) {
      this.productId = currRoute;
      this.productService.getProduct(this.productId).subscribe((data) => {
        this.product = data;
      });
    }
  }
}
