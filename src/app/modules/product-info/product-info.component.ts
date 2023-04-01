import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInit, publicRoutes } from 'src/app/models';
import { GetProductsService, SnackBarService } from 'src/app/services';
import { IProduct } from 'src/app/types';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  product: IProduct = productInit;
  filterCategory: IProduct[] = [];
  productImages: string[] = [];
  currProductImageIndex = 0;
  productId = '';

  cuantity = '1';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: GetProductsService,
    private snackBar: SnackBarService
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

  addToCart() {
    if (this.cuantity !== 'na') {
      const parseCuantity: number = parseInt(this.cuantity);
      // add to global ngrx
    } else {
      //error and show a snackbar
      this.snackBar.openSnackBar('Error, please select a cuantity', 'close');
    }
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

      this.productService.getProducts().subscribe((data) => {
        const filterCategory = data.products.filter(
          (item) => item.category === this.product.category
        );
        this.filterCategory = filterCategory;
      });
    }
  }
}
