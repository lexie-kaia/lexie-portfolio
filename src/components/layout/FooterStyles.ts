import styled from '@emotion/styled';
import { PageMargin } from '../styles/PageMargin';

export const FooterContainer = styled.header``;

export const FooterPageMargin = PageMargin;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  font-size: 14px;
  line-height: 20px;
`;

export const Copyright = styled.div``;

export const ContactList = styled.ul`
  display: flex;
`;

export const ContactItem = styled.li``;

export const ContactLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  height: 2rem;
  text-transform: uppercase;
`;
