import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services';
import { IProduct } from 'src/app/types';
import { filterByCategory } from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  smartphones: IProduct[] = [];
  laptops: IProduct[] = [];
  homeDecoration: IProduct[] = [];
  skincare: IProduct[] = [];
  fragrances: IProduct[] = [];
  groceries: IProduct[] = [];

  constructor(private productsService: GetProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      const dataList: IProduct[] = data.products;
      this.smartphones = filterByCategory(dataList, 'smartphones');
      this.laptops = filterByCategory(dataList, 'laptops');
      this.homeDecoration = filterByCategory(dataList, 'home-decoration');
      this.skincare = filterByCategory(dataList, 'skincare');
      this.fragrances = filterByCategory(dataList, 'fragrances');
      this.groceries = filterByCategory(dataList, 'groceries');
    });
  }
}
