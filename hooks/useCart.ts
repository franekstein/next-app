import { useContext } from 'react';
import { CartContext } from '../state/cartContect';

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('No cart context!');
  }

  return context;
};
