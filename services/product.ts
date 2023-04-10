import { API_URL } from '@/constants';
import { ProductEntity } from '@/model/product';
import { createQueryParams } from '@/utils';

export interface ProductClient {
  getProduct: (id: string) => Promise<Response>;
  getProducts: (take?: number, offset?: number) => Promise<Response>;
}

export interface ProductService {
  getProduct: (id: string) => Promise<ProductEntity>;
  getProducts: (take?: number, offset?: number) => Promise<ProductEntity[]>;
}

const productClient: ProductClient = {
  getProducts: async (take, offset) => {
    const params = {
      take,
      offset,
    };
    const queryParams = createQueryParams(params);

    return fetch(`${API_URL}/products${queryParams}`);
  },
  getProduct: async (id: string) => fetch(`${API_URL}/products/${id}`),
};

const createProductService = (
  client: ProductClient = productClient
): ProductService => {
  return {
    getProduct: async (id: string) => {
      try {
        const response = await client.getProduct(id);
        return response.json();
      } catch (error) {
        console.error('Error', error);
      }
    },
    getProducts: async (take, offset) => {
      try {
        const response = await client.getProducts(take, offset);
        return response.json();
      } catch (error) {
        console.error('Error', error);
      }
    },
  };
};

export const productService = createProductService();
