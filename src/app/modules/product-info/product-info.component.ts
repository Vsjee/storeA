import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartItem, productInit, publicRoutes } from 'src/app/models';
import { GetProductsService, SnackBarService } from 'src/app/services';
import { addCartItem } from 'src/app/state';
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
    private snackBar: SnackBarService,
    private store: Store
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
      const productValue: number = parseCuantity * this.product.price;

      const cartItem: CartItem = {
        id: this.product.id,
        title: this.product.title,
        price: productValue,
        brand: this.product.brand,
        category: this.product.category,
        cuantity: parseCuantity,
      };
      this.store.dispatch(addCartItem({ cartItem: cartItem }));
    } else {
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
          (item) =>
            item.category === this.product.category &&
            item.title !== this.product.title
        );
        this.filterCategory = filterCategory;
      });
    }
  }
}
