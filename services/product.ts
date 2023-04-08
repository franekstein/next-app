import { API_URL } from '@/constants';
import { ProductEntity } from '@/model/product';
import { createQueryParams } from '@/utils';

export const getProducts = async (
  take?: number,
  offset?: number
): Promise<ProductEntity[]> => {
  const params = {
    take,
    offset,
  };

  const queryParams = createQueryParams(params);
  const data = await fetch(`${API_URL}/products${queryParams}`);
  return data.json();
};

export const getProduct = async (id: string): Promise<ProductEntity> => {
  const data = await fetch(`${API_URL}/products/${id}`);
  return data.json();
};

// Nie opakowywać linków prowadzących do zewnętrznych stron w komponent <Link>
// Dodać do linków zewnętrznych atrybuty rel="noopener noreferrer"
