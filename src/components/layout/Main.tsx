import React, { ReactNode } from 'react';
import * as S from './MainStyles';

type Props = {
  children: ReactNode;
};

export default function Content({ children }: Props) {
  return (
    <S.MainPageMargin>
      <S.MainContent>{children}</S.MainContent>
    </S.MainPageMargin>
  );
}
