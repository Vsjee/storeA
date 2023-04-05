import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CartState } from 'src/app/models';

export const selectCartFeature = (state: AppState) => state.cart;

export const selectFavoriteList = createSelector(
  selectCartFeature,
  (cart: CartState) => cart.cart
);

export const selectFavoriteLoading = createSelector(
  selectCartFeature,
  (cart: CartState) => cart.loading
);
