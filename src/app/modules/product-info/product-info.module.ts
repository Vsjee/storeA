import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoRoutingModule } from './product-routing.module';
import { ProductInfoComponent } from './product-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductInfoComponent],
  imports: [
    CommonModule,
    ProductInfoRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ProductInfoModule {}
