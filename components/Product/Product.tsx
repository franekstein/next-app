import Image from 'next/image'
import { Rating } from '../Rating/Rating'
import { ProductEntity } from '@/model/product'

interface ProductProps {
  product: ProductEntity
}

export const Product = ({ product }: ProductProps) => {
  const { image, rating, title, price } = product
  return (
    <div className="group block overflow-hidden p-4">
      <Image
        src={image}
        alt={title}
        className="w-full aspect-[2/3] object-cover transition duration-500 group-hover:scale-105"
        width={640}
        height={712}
      />

      <div className="relative flex flex-col bg-white pt-3">
        <h3 className="text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>

        <div className="mt-2 flex justify-between items-center">
          <span className="tracking-wider text-gray-900">${price}</span>
          <Rating rating={rating.rate} />
        </div>
      </div>
    </div>
  )
}
