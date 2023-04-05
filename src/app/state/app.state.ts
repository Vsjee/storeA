import { ActionReducerMap } from '@ngrx/store';
import { CartState } from '../models';
import { CartReducers } from './cart';

export interface AppState {
  cart: CartState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  cart: CartReducers,
};
