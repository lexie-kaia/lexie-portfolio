import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Main';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
