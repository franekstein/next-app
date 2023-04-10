import { productService } from '@/services/product';
import { useQuery } from 'react-query';

export const useProducts = ({
  take,
  offset,
}: {
  take: number;
  offset: number;
}) => {
  const { data: products = [], ...rest } = useQuery(['products'], () =>
    productService.getProducts(take + 1, offset)
  );

  const hasPrev = offset !== 0;
  const hasNext = products.length === take + 1;

  const filteredProducts =
    products.length === take + 1 ? products.slice(0, -1) : products;

  return {
    products: filteredProducts,
    hasNext,
    hasPrev,
    offset,
    take,
    ...rest,
  };
};
