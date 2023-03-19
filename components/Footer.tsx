export const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-teal-50">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs leading-relaxed text-gray-500">
            © Damian Kieliszek 2022. All rights reserved.
            <br />
            Created with
            <a
              href=""
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              NextJS
            </a>
            and
            <a
              href=""
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              Love
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};


