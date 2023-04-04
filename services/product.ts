import { API_URL } from "@/constants";
import { ProductEntity } from "@/model/product";

export const getProducts = async (
  take: number,
  offset: number
): Promise<ProductEntity[]> => {
  const data = await fetch(
    `${API_URL}/products?take=${take}&offset=${offset}`
  );
  return data.json();
};