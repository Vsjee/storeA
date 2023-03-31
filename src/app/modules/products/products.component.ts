import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductNotFoundDialogComponent } from 'src/app/components/product-not-found-dialog/product-not-found-dialog.component';
import { GetProductsService } from 'src/app/services';
import { IProduct } from 'src/app/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productsService: GetProductsService,
    public dialog: MatDialog
  ) {}

  search = new FormControl('');

  handleSearch() {
    this.productsService.getProducts().subscribe((data) => {
      let currSearch: string;
      if (this.search.value !== null) {
        currSearch = this.search.value;

        if (currSearch !== '') {
          const filteredData = data.products.filter((item) =>
            item.title.toLowerCase().includes(currSearch.toLowerCase())
          );
          if (filteredData.length === 0) {
            this.openDialog();
          } else {
            this.products = filteredData;
          }
          this.search.setValue('');
        } else {
          this.products = data.products;
        }
      }
    });
  }

  openDialog() {
    this.dialog.open(ProductNotFoundDialogComponent);
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
