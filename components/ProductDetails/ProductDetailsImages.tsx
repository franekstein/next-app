import Image from 'next/image';

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductDetailsImagesProps {
  mainImage: ProductImage;
  images: ProductImage[];
}

export const ProductDetailsImages = ({
  mainImage,
  images,
}: ProductDetailsImagesProps) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
    <Image
      alt={mainImage.alt}
      src={mainImage.src}
      className="aspect-square w-full rounded object-cover border border-gray-200 transition duration-500 group-hover:scale-105"
      width={640}
      height={712}
    />

    <div className="grid grid-cols-2 gap-4 lg:mt-4">
      {images.map(({ alt, src }, index) => (
        <Image
          key={index}
          alt={alt}
          src={src}
          className="aspect-square w-full rounded object-cover border border-gray-200 transition duration-500 group-hover:scale-105"
          width={640}
          height={712}
        />
      ))}
    </div>
  </div>
);
