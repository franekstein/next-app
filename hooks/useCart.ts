import { useContext } from 'react';
import { CartContext } from '../state/cartContext';

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('No cart context!');
  }

  return context;
};
