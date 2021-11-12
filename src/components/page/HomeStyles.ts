import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 13rem);
  height: 100%;
  padding: 4rem 0;
`;

export const Hero = styled.div``;

export const HeroText = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 52px;
`;

export const TopRow = styled.div``;

export const BottomRow = styled.div``;

export const Contact = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 28px;
`;

export const ContactName = styled.strong`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ContactEmail = styled.a``;

export const Menu = styled.nav`
  margin-top: 4rem;
`;

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const MenuLink = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
`;
