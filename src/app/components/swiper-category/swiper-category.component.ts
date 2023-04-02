import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { owlCustomOptions } from 'src/app/utils';
import { ProductInfoRoutingModule } from 'src/app/modules/product-info/product-routing.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    MatButtonModule,
    ProductInfoRoutingModule,
  ],
  selector: 'app-swiper-category',
  templateUrl: './swiper-category.component.html',
  styleUrls: ['./swiper-category.component.scss'],
})
export class SwiperCategoryComponent {
  @Input() productsByCategorie: IProduct[] = [];
  customOptions = owlCustomOptions;
}
