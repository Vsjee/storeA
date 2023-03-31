import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
          this.products = filteredData;
          this.search.setValue('');
        } else {
          this.products = data.products;
        }
      }
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
