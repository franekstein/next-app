import { useCart } from '@/hooks/useCart';
import { Button } from '../Button/Button';
import { CartButton } from '../CartButton/CartButton';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export interface CartProps {
  onOpenCart: VoidFunction;
  cartOpened: boolean;
}

export const Cart = ({ cartOpened, onOpenCart }: CartProps) => {
  const { getTotals, items } = useCart();
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
          <ul className="space-y-6 w-full">
            {items.map(({ product: { id, title, price, image }, quantity }) => (
              <li key={id} className="flex items-center gap-6">
                <Image
                  src={image}
                  className="h-24 w-24 object-cover rounded border border-gray-200"
                  alt={title}
                  width={640}
                  height={712}
                />

                <div>
                  <h3 className="text-sm text-gray-900">{title}</h3>

                  <dl className="mt-2 space-y-px text-[12px] text-gray-600">
                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="ml-1 inline font-bold">
                        ${price * quantity}
                      </dd>
                    </div>

                    <div>
                      <dt className="inline">Qty:</dt>
                      <dd className="ml-1 inline font-bold">{quantity}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between w-full max-w-xl pt-6 text-[16px]">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${price}</span>
          </div>
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
