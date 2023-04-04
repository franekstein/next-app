import { PRODUCTS_PER_PAGE } from "@/constants";
import Link from "next/link";

export const FooterNavigation = () => {
  const navigation = [
    { title: "Main", href: "/" },
    { title: "Products CSR", href: "/products" },
    { title: "Products SSG", href: `/products/${PRODUCTS_PER_PAGE}/0` },
    { title: "About", href: "/about" },
  ];
  
  return (
    <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
      {navigation.map(({ title, href }) => (
        <li key={href} className="hover:text-gray-800">
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
