import Link from 'next/link';
import { Product } from '../Product/Product';
import { ProductEntity } from '@/model/product';

export interface ProductListProps {
  products: ProductEntity[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => {
        const { id } = product;
        return (
          <li key={id}>
            <Link href={`/products/csr/${id}`}>
              <Product product={product} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
