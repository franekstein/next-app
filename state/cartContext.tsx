import { CartItem, CartItems } from '@/model/cart';
import { CartService, cartService as cartServiceImport } from '@/services/cart';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

export interface CartContextReturn {
  items: CartItem[];
  getTotals: () => {
    quantity: number;
    price: number;
  };
  removeItem: (item: CartItem) => Promise<void>;
  addItem: (item: CartItem) => Promise<void>;
}

export const CartContext = createContext<CartContextReturn | null>(null);

export const CartContextProvider = ({
  children,
  cartService = cartServiceImport,
}: {
  children: ReactNode;
  cartService?: CartService;
}) => {
  const [state, setState] = useState<CartItems>({
    items: [],
  });

  const { items } = state;

  useEffect(() => {
    const getInitialItems = async () => {
      const items = await cartService.getCart();
      setState({
        items,
      });
    };
    getInitialItems();
  }, [cartService]);

  const addItem = useCallback(
    async (item: CartItem) => {
      const items = await cartService.addItem(item);
      setState({ items });
    },
    [cartService]
  );

  const removeItem = useCallback(
    async (item: CartItem) => {
      const items = await cartService.removeItem(item);
      setState({ items });
    },
    [cartService]
  );

  const getTotals = useCallback(
    () => ({
      quantity: items.reduce((prev, current) => prev + current.quantity, 0),
      price: items.reduce(
        (prev, current) => prev + current.quantity * current.product.price,
        0
      ),
    }),
    [items]
  );

  const value: CartContextReturn = {
    items,
    getTotals,
    removeItem,
    addItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
