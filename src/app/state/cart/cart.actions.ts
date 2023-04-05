import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/models';

export const addCartItem = createAction(
  '[Cart List] Add cart item success',
  props<{ cartItem: CartItem }>()
);

export const removeCartItem = createAction(
  '[Cart List] Add cart item success',
  props<{ cartItem: CartItem }>()
);
