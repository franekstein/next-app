import { useCart } from '@/hooks/useCart';
import { Button } from '../Button/Button';
import { CartButton } from '../CartButton/CartButton';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { PlusIcon } from '@/icons/PlusIcon';
import { MinusIcon } from '@/icons/MinusIcon';
import { TrashIcon } from '@/icons/TrashIcon';

export interface CartProps {
  onOpenCart: VoidFunction;
  cartOpened: boolean;
}

export const Cart = ({ cartOpened, onOpenCart }: CartProps) => {
  const { getTotals, items, addItem, removeItem } = useCart();
  const { quantity, price } = getTotals();
  const { push } = useRouter();

  const cartClasses = clsx(
    'w-screen max-w-sm border rounded-lg bg-white drop-shadow-2xl absolute top-16 -right-14 md:right-0 right-0 z-10',
    { hidden: !cartOpened }
  );

  return (
    <div className="relative">
      <CartButton onClick={onOpenCart} quantity={quantity} />
      <div
        className={cartClasses}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <div className="flex flex-col items-start justify-between p-6">
          <div className="max-w-xl pb-6">
            <h3 className="font-semibold text-[16px]">Cart</h3>
          </div>
          <ul className="space-y-6 w-full max-h-96 overflow-y-auto">
            {items.length === 0 && (
              <li className="flex items-center gap-6">Cart is empty</li>
            )}
            {items.map(({ product, quantity }) => {
              const { id, title, price, image } = product;
              return (
                <li key={id} className="flex items-center gap-6">
                  <Image
                    src={image}
                    className="h-24 w-24 object-cover rounded border border-gray-200"
                    alt={title}
                    width={640}
                    height={712}
                  />

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-sm text-gray-900">{title}</h3>

                    <dl className="mt-2 space-y-2 text-[14px] text-gray-600">
                      <div>
                        <dt className="inline">Price:</dt>
                        <dd className="ml-1 inline font-bold">
                          ${price * quantity}
                        </dd>
                      </div>

                      <div className="flex mt-2 items-center">
                        <button
                          onClick={() => removeItem({ product, quantity: 1 })}
                        >
                          <MinusIcon />
                        </button>
                        <dt className="mx-1 inline">Qty:</dt>
                        <dd className="mx-1 inline font-bold">{quantity}</dd>
                        <button
                          onClick={() => addItem({ product, quantity: 1 })}
                        >
                          <PlusIcon />
                        </button>
                        <button
                          className="ml-auto"
                          onClick={() => removeItem({ product, quantity })}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </dl>
                  </div>
                </li>
              );
            })}
          </ul>
          {items.length > 0 && (
            <div className="flex justify-between w-full max-w-xl pt-6 text-[16px]">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${price}</span>
            </div>
          )}
        </div>
        <div className="py-5 px-4 border-t text-right">
          <Button variant="primary" onClick={() => push('/checkout')}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
