import clsx from 'clsx';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Logo } from '../../icons/Logo';
import { NavigationList } from './NavigationList';
import { NavigationMobile } from './NavigationMobile';
import { Cart } from '../Cart/Cart';

export const Navigation = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);

  const navigationListClasses = clsx(
    'flex-1 pb-3 mt-8 md:flex md:items-center md:pb-0 md:mt-0',
    {
      flex: menuOpened,
      hidden: !menuOpened,
    }
  );

  const onOpenCart = useCallback(() => {
    setCartOpened((previousValue) => !previousValue);
    setMenuOpened(false);
  }, []);

  const onOpenMenu = useCallback(() => {
    setMenuOpened((previousValue) => !previousValue);
    setCartOpened(false);
  }, []);

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:pl-6">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Logo />
          </Link>
          <NavigationMobile
            onOpenMenu={onOpenMenu}
            onOpenCart={onOpenCart}
            cartOpened={cartOpened}
            menuOpened={menuOpened}
          />
        </div>
        <div className={navigationListClasses}>
          <NavigationList />
          <span className="hidden w-px h-6 bg-gray-300 md:block md:mx-2" />
          <div className="space-y-3 items-center gap-x-6 md:space-y-0 hidden md:block">
            <Cart onOpenCart={onOpenCart} cartOpened={cartOpened} />
          </div>
        </div>
      </div>
    </nav>
  );
};
