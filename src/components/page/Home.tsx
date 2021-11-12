import React from 'react';
import * as S from './HomeStyles';

export default function Home() {
  return (
    <S.Home>
      <S.TopRow>
        <S.Hero>
          <S.HeroText>
            안녕하세요, <b>프론트엔드 개발자 김가연</b>입니다.
            <br />
            저는 <b>'왜'를 설명해주지 않아도 되는 신입 개발자</b>이자,
            <br />
            <b>주어진 문제를 끝까지 해결하는 개발자</b>입니다.
          </S.HeroText>
        </S.Hero>
        <S.Contact>
          <S.ContactName>Lexie Gayeon Kim</S.ContactName>
          <S.ContactEmail href="#">kaia.gayeon.kim@gmail.com</S.ContactEmail>
        </S.Contact>
      </S.TopRow>

      <S.BottomRow>
        <S.Menu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/about">about &gt;</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/projects">projects &gt;</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.Menu>
      </S.BottomRow>
    </S.Home>
  );
}
