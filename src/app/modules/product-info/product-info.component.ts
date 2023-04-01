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
  productImages: string[] = [];
  currProductImageIndex = 0;
  productId = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: GetProductsService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  goNext() {
    if (this.productImages.length - 1 === this.currProductImageIndex) {
      this.currProductImageIndex = 0;
    } else {
      this.currProductImageIndex += 1;
    }
  }

  goPrev() {
    if (this.currProductImageIndex === 0) {
      this.currProductImageIndex = this.productImages.length - 1;
    } else {
      this.currProductImageIndex -= 1;
    }
  }

  goSelectedImg(id: number) {
    this.currProductImageIndex = id;
  }

  ngOnInit(): void {
    const currRoute = this.route.snapshot.paramMap.get(
      `${publicRoutes.PRODUCT_ID}`
    );

    if (currRoute !== null) {
      this.productId = currRoute;
      this.productService.getProduct(this.productId).subscribe((data) => {
        this.product = data;
        this.productImages = data.images;
      });
    }
  }
}
