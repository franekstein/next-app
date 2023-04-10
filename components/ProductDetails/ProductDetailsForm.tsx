import { useCart } from '@/hooks/useCart';
import { useState, useCallback } from 'react';
import { Button } from '../Button/Button';
import { ProductDescriptionMarkdown, ProductEntity } from '@/model/product';

export interface ProductDetailsFormProps {
  product: ProductEntity & ProductDescriptionMarkdown;
}

export const ProductDetailsForm = ({ product }: ProductDetailsFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const onSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      await addItem({
        product,
        quantity,
      });
    },
    [addItem, product, quantity]
  );

  return (
    <form className="mt-8" onSubmit={onSubmit}>
      <div className="mt-8 flex gap-4">
        <div>
          <label htmlFor="quantity" className="sr-only">
            Qty
          </label>

          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={({ target: { valueAsNumber } }) =>
              setQuantity((previousValue) =>
                isNaN(valueAsNumber) ? previousValue : valueAsNumber
              )
            }
            className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <Button variant="primary" type="submit">
          Add to Cart
        </Button>
      </div>
    </form>
  );
};
