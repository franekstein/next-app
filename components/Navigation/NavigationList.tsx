import { useRouter } from "next/router";
import { NavigationItem } from "./NavigationItem";

export const NavigationList = () => {
  const navigation = [
    { title: "Main", href: "/" },
    { title: "Products CSR", href: "/products/csr" },
    { title: "Products ISR", href: "/products/isr" },
    { title: "About", href: "/about" },
  ];
  const { pathname } = useRouter();

  return (
    <ul className="justify-end items-center space-y-6 md:flex md:ml-auto md:mr-2 md:space-x-6 md:space-y-0">
      {navigation.map(({ href, title }) => (
        <NavigationItem
          key={href}
          href={href}
          title={title}
          active={pathname === href}
        />
      ))}
    </ul>
  );
};
