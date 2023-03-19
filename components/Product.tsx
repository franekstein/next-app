import { Rating } from "./Rating";

interface ProductProps {
  data: {
    name: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}
export const Product = ({ data }: ProductProps) => {
  const { thumbnailAlt, thumbnailUrl, rating, description, name } = data;
  return (
    <>
      <img
        src={thumbnailUrl}
        alt={thumbnailAlt}
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />

      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            {description}
          </p>
        </div>
        <Rating rating={rating} />
      </div>
    </>
  );
};
