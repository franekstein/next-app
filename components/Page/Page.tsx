import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="text-gray-600 min-h-screen flex flex-col"> {children}</div>
  );
};
