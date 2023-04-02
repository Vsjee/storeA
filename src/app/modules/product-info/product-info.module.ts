import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoRoutingModule } from './product-routing.module';
import { ProductInfoComponent } from './product-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { SwiperCategoryComponent } from 'src/app/components';

@NgModule({
  declarations: [ProductInfoComponent],
  imports: [
    CommonModule,
    ProductInfoRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    SwiperCategoryComponent,
  ],
})
export class ProductInfoModule {}
