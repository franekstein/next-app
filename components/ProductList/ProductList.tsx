import { ProductEntity } from "@/pages/products";
import Link from "next/link";
import { Product } from "../Product/Product";

export interface ProductListProps {
  data: ProductEntity[];
}

export const ProductList = ({ data }: ProductListProps) => {
  return (
    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((product) => {
        const { id } = product;
        return (
          <li key={id}>
            <Link href={`/products/${id}`}>
              <Product data={product} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
