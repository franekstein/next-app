import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="relative flex-grow mx-auto mt-6 w-full max-w-container px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
};
