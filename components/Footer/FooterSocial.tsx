import { FacebookIcon } from '@/icons/FacebookIcon';
import { PinterestIcon } from '@/icons/PinterestIcon';
import { TwitterIcon } from '@/icons/TwitterIcon';

export const FooterSocial = () => (
  <div className="mt-6 sm:mt-0">
    <ul className="flex items-center space-x-4">
      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
        <a href="https://twitter.com">
          <TwitterIcon />
        </a>
      </li>

      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
        <a href="https://facebook.com">
          <FacebookIcon />
        </a>
      </li>

      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
        <a href="https://pinterest.com">
          <PinterestIcon />
        </a>
      </li>
    </ul>
  </div>
);
