export interface CartState {
  loading: boolean;
  cart: CartItem[];
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
}
