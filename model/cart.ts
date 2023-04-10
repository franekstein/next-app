import { ProductEntity } from './product';

export interface CartItem {
  product: ProductEntity;
  quantity: number;
}

export interface CartItems {
  items: CartItem[];
}
