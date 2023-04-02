import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/types';
import { GetProductsService } from '../getProducts';
import { currentDayKey, featuredProductsKey } from 'src/app/models';
import { getLocalStorage, setLocalStorage } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class FeaturedProductsService {
  setCurrentDay = new Date().getDate().toString();
  currentDay = getLocalStorage<string>(currentDayKey, '0');
  featuredProducts: IProduct[] = getLocalStorage<[]>(featuredProductsKey, []);

  constructor(private productsService: GetProductsService) {}

  setFeaturedProducts(): void {
    this.productsService.getProducts().subscribe((data) => {
      const randomItemOne: IProduct = this.getRandomElement(data.products);
      const dataWithoutItemOne = data.products.filter(
        (item) => item !== randomItemOne
      );
      const randomItemTwo: IProduct = this.getRandomElement(dataWithoutItemOne);
      this.featuredProducts = [randomItemOne, randomItemTwo];

      setLocalStorage<IProduct[]>(featuredProductsKey, this.featuredProducts);
    });
  }

  getRandomElement(data: IProduct[]): IProduct {
    return data[Math.floor(Math.random() * data.length)];
  }

  handleFeaturedProducts(): IProduct[] {
    if (this.currentDay !== '0') {
      if (this.currentDay !== this.setCurrentDay) {
        setLocalStorage<string>(currentDayKey, this.setCurrentDay);
        this.setFeaturedProducts();
        return this.featuredProducts;
      }
      return this.featuredProducts;
    } else {
      setLocalStorage<string>(currentDayKey, this.setCurrentDay);
      this.setFeaturedProducts();
      return this.featuredProducts;
    }
  }
}
