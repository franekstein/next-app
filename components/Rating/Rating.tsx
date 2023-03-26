import { StarIcon } from "@/icons/StarIcon";

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="flex">
      <StarIcon />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {rating}
      </p>
    </div>
  );
};
