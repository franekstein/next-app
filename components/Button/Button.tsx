import clsx from "clsx";

export const Button = ({
  className,
  ...rest
}: JSX.IntrinsicElements["button"]) => {
  const buttonClasses = clsx(
    "px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg",
    className
  );
  return <button {...rest} className={buttonClasses} />;
};
