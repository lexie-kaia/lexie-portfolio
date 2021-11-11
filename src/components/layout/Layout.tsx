import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
