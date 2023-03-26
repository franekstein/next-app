import clsx from "clsx";

export interface ButtonProps {
  variant: 'primary' | 'ghost';
}

export const Button = ({
  className,
  disabled,
  variant,
  ...rest
}: JSX.IntrinsicElements["button"] & ButtonProps) => {
  const buttonClasses = clsx(
    "px-4 py-2 rounded-lg duration-150 active:shadow-lg",
    { 'cursor-not-allowed': disabled },
    { 'text-white bg-indigo-600 hover:bg-indigo-700': variant === 'primary' },
    { 'bg-indigo-300 hover:bg-indigo-300': disabled && variant === 'primary'},
    { 'text-gray-700 hover:border-indigo-600': variant === 'ghost' },
    { 'hover:border-indigo-200': disabled && variant === 'ghost'},
    className
  );
  return <button {...rest} className={buttonClasses} disabled={disabled} />;
};
