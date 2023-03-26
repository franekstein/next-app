import Link from "next/link";

export interface PageDescriptionProps {
  header: string;
  subheader: string;
  description: string;
  link?: {
    href: string;
    title: string;
  };
}

export const PageDescription = ({
  header,
  subheader,
  description,
  link,
}: PageDescriptionProps) => (
  <section
    className="py-28"
    style={{
      background:
        "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
    }}
  >
    <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
      <div className="max-w-xl space-y-3 md:mx-auto">
        <h3 className="text-indigo-600 font-semibold">{header}</h3>
        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          {subheader}
        </p>
        <p className="text-gray-600">{description}</p>
      </div>
      {link && (
        <div className="mt-4">
          <Link
            href={link.href}
            className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
          >
            {link.title}
          </Link>
        </div>
      )}
    </div>
  </section>
);
