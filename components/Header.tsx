import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header aria-label="Site Header" className="bg-teal-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className={`${
                    router.pathname === "/" ? "font-bold" : ""
                  } text-gray-500 transition hover:text-gray-500/75`}
                  href="/"
                >
                  Main
                </Link>
              </li>

              <li>
                <Link
                  className={`${
                    router.pathname === "/about" ? "font-bold" : ""
                  }  text-gray-500 transition hover:text-gray-500/75`}
                  href="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
