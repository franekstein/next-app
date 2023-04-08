import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Rating } from '../Rating/Rating'
import { ProductEntity } from '@/model/product'

export interface ProductDetailsProps {
  product: ProductEntity
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const {
    image,
    rating: { rate },
    title,
    price,
    description,
  } = product
  const [quantity, setQuantity] = useState(1)
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <Image
              alt={title}
              src={image}
              className="aspect-square w-full rounded-xl object-cover"
              width={640}
              height={712}
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <Image
                alt={title}
                src={image}
                className="aspect-square w-full rounded-xl object-cover"
                width={640}
                height={712}
              />

              <Image
                alt={title}
                src={image}
                className="aspect-square w-full rounded-xl object-cover"
                width={640}
                height={712}
              />

              <Image
                alt={title}
                src={image}
                className="aspect-square w-full rounded-xl object-cover"
                width={640}
                height={712}
              />

              <Image
                alt={title}
                src={image}
                className="aspect-square w-full rounded-xl object-cover"
                width={640}
                height={712}
              />
            </div>
          </div>

          <div className="sticky top-0">
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
                <Rating rating={rate} />
              </div>

              <p className="text-lg font-bold">${price}</p>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{description}</p>
              </div>
            </div>

            <form className="mt-8">
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
          </div>
        </div>
      </div>
    </section>
  )
}
