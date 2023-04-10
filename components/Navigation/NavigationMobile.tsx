import { CrossIcon } from '@/icons/CrossIcon';
import { MenuIcon } from '@/icons/MenuIcon';
import { Cart } from '../Cart/Cart';

export interface NavigationMobileProps {
  onOpenMenu: VoidFunction;
  onOpenCart: VoidFunction;
  cartOpened: boolean;
  menuOpened: boolean;
}

export const NavigationMobile = ({
  onOpenMenu,
  onOpenCart,
  menuOpened,
  cartOpened,
}: NavigationMobileProps) => (
  <div className="md:hidden flex">
    <Cart onOpenCart={onOpenCart} cartOpened={cartOpened} />
    <button
      className="block text-gray-500 hover:text-gray-800 mx-2"
      onClick={onOpenMenu}
    >
      {menuOpened ? <MenuIcon /> : <CrossIcon />}
    </button>
  </div>
);
