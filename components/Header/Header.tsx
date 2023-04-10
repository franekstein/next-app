import { Navigation } from '../Navigation/Navigation';

export const Header = () => (
  <header
    aria-label="Site Header"
    className="bg-teal-50 sticky top-0 left-0 w-full z-20"
  >
    <Navigation />
  </header>
);
