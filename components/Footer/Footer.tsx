import { Logo } from "@/icons/Logo";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocial } from "./FooterSocial";

export const Footer = () => (
  <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
    <div className="max-w-lg sm:mx-auto sm:text-center">
      <Logo />
      <p className="leading-relaxed mt-2 text-[15px]">
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
      </p>
    </div>
    <FooterNavigation />
    <div className="mt-8 items-center justify-between sm:flex">
      <div className="mt-4 sm:mt-0">
        &copy; 2022 Logoipsum All rights reserved.
      </div>
      <FooterSocial />
    </div>
  </footer>
);
