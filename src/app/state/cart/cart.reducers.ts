import { createReducer, on } from '@ngrx/store';
import { CartState } from 'src/app/models';
import { addCartItem, removeCartItem } from './cart.actions';

export const initialState: CartState = { loading: false, cart: [] };

export const CartReducers = createReducer(
  initialState,
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(addCartItem, (state, { cartItem }) => ({
    ...state,
    cart: [
      ...state.cart,
      {
        ...cartItem,
      },
    ],
  })),

  on(removeCartItem, (state, { cartItem }) => ({
    ...state,
    cart: [...state.cart.filter((item) => item.id !== cartItem.id)],
  }))
);
