import React from 'react';
import * as S from './FooterStyles';

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <S.FooterContainer>
      <S.FooterPageMargin>
        <S.FooterContent>
          <S.Copyright>
            © {getYear()} LEXIE/PORTFOLIO all rights reserved.
          </S.Copyright>

          <S.ContactList>
            <S.ContactItem>
              <S.ContactLink href="#">Github</S.ContactLink>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactLink href="#">Blog</S.ContactLink>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactLink href="#">Mail</S.ContactLink>
            </S.ContactItem>
          </S.ContactList>
        </S.FooterContent>
      </S.FooterPageMargin>
    </S.FooterContainer>
  );
}
