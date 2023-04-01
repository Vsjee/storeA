import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetProductsService } from 'src/app/services';
import { IProduct } from 'src/app/types';
import { FilterPipe } from 'src/app/pipes';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterPipe,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  products: IProduct[] = [];

  searchText = '';

  @ViewChild('searchbar') searchbar?: ElementRef;

  constructor(private productsService: GetProductsService) {}

  closeSearchMenu() {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
