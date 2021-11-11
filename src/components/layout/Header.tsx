import React from 'react';
import * as S from './HeaderStyles';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderPageMargin>
        <S.HeaderContent>
          <div>Logo</div>
          <S.Menu>
            <S.MenuLink to="/">Home</S.MenuLink>
            <S.MenuLink to="/about">About</S.MenuLink>
            <S.MenuLink to="/projects">Projects</S.MenuLink>
          </S.Menu>
        </S.HeaderContent>
      </S.HeaderPageMargin>
    </S.HeaderContainer>
  );
}
