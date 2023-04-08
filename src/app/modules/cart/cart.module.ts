import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
