import { Rating } from '../Rating/Rating';
import { ProductDescriptionMarkdown, ProductEntity } from '@/model/product';
import { Markdown } from '../Markdown/Markdown';
import { ProductDetailsImages, ProductImage } from './ProductDetailsImages';
import { ProductDetailsForm } from './ProductDetailsForm';

export interface ProductDetailsProps {
  product: ProductEntity & ProductDescriptionMarkdown;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const {
    image,
    rating: { rate },
    title,
    price,
    longDescriptionMarkdown,
  } = product;

  const productImage: ProductImage = {
    src: image,
    alt: title,
  };

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <ProductDetailsImages
            images={[productImage, productImage, productImage, productImage]}
            mainImage={productImage}
          />

          <div className="sticky top-24">
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
                <Rating rating={rate} />
              </div>

              <p className="text-lg font-bold">${price}</p>
            </div>

            <div className="mt-4">
              <Markdown content={longDescriptionMarkdown} />
            </div>

            <ProductDetailsForm product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};
