import { CartIcon } from "@/icons/CartIcon";
import { CrossIcon } from "@/icons/CrossIcon";
import { MenuIcon } from "@/icons/MenuIcon";

export interface NavigationMobileProps {
  active: boolean;
  onClick: VoidFunction;
}

export const NavigationMobile = ({
  active,
  onClick,
}: NavigationMobileProps) => (
  <div className="md:hidden flex">
    <button className="block text-gray-500 hover:text-gray-800 mx-2">
      <CartIcon />
    </button>
    <button
      className="block text-gray-500 hover:text-gray-800 mx-2"
      onClick={onClick}
    >
      {active ? <MenuIcon /> : <CrossIcon />}
    </button>
  </div>
);
