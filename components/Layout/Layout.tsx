import { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Page } from '../Page/Page';
import { Main } from '../Main/Main';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Page>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  );
};
