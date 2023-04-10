import { CartIcon } from '@/icons/CartIcon';

export interface CartButtonProps {
  onClick: VoidFunction;
  quantity: number;
}

export const CartButton = ({ quantity, onClick }: CartButtonProps) => (
  <button
    className="block p-3 text-gray-500 hover:text-gray-800"
    onClick={onClick}
  >
    <CartIcon />
    <span className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 bg-red-500 rounded-full text-white font-bold text-sm">
      {quantity}
    </span>
  </button>
);
