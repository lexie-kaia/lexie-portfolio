import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PageMargin } from '../styles/PageMargin';

export const HeaderContainer = styled.header``;

export const HeaderPageMargin = PageMargin;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

export const Menu = styled.nav`
  display: flex;
`;

export const MenuLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  height: 2rem;
  text-transform: uppercase;
`;
