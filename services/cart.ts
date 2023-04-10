import { CartItem } from '@/model/cart';
import { isItem } from '@/utils';

export interface CartClient {
  getCart: () => CartItem[];
  setCart: (items: CartItem[]) => void;
}

export interface CartService {
  getCart: () => Promise<CartItem[]>;
  addItem: (item: CartItem) => Promise<CartItem[]>;
  removeItem: (item: CartItem) => Promise<CartItem[]>;
}

const CART_KEY = 'cart';

const cartClient: CartClient = {
  getCart: () => {
    const store = localStorage.getItem(CART_KEY);
    if (!store) {
      return [];
    }

    return JSON.parse(store) as CartItem[];
  },
  setCart: (items: CartItem[]) =>
    localStorage.setItem(CART_KEY, JSON.stringify(items)),
};

const createCartService = (client: CartClient = cartClient): CartService => ({
  removeItem: (itemToRemove: CartItem) => {
    const items = client.getCart();
    const newItems = items
      .map(({ product, quantity }) => {
        if (product.id === itemToRemove.product.id) {
          const newQuantity = quantity - itemToRemove.quantity;
          if (newQuantity <= 0) {
            return null;
          }
          return {
            product,
            quantity: newQuantity,
          };
        }
      })
      .filter(isItem);
    client.setCart(newItems);
    return Promise.resolve(newItems);
  },
  addItem: (itemToAdd: CartItem) => {
    const items = client.getCart();
    const existingItem = items.find(
      (entry) => entry.product.id === itemToAdd.product.id
    );
    if (!existingItem) {
      const newItems = [...items, itemToAdd];
      client.setCart(newItems);
      return Promise.resolve(newItems);
    }
    const newItems = items.map((entry) => {
      if (entry.product.id === itemToAdd.product.id) {
        const { product, quantity } = entry;
        const newQuantity = quantity + itemToAdd.quantity;
        return {
          product,
          quantity: newQuantity,
        };
      }
      return entry;
    });
    client.setCart(newItems);
    return Promise.resolve(newItems);
  },
  getCart: () => Promise.resolve(client.getCart()),
});

export const cartService = createCartService();
