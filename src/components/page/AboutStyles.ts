import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  min-height: calc(100vh - 13rem);
  height: 100%;
  padding: 2rem 0;
`;

export const LeftCol = styled.div`
  align-self: end;
`;

export const RightCol = styled.div`
  align-self: end;
`;

export const SectionH1 = styled.h1`
  margin-bottom: 1.25rem;
`;

export const SectionH2 = styled.p``;

export const SectionBody = styled.div`
  font-size: 18px;
  line-height: 32px;
`;

export const SectionParagraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

export const SkillList = styled.ul`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

export const SkillItem = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  margin-right: 1rem;
  font-weight: 700;
`;

export const MenuLink = styled(Link)`
  display: block;
  margin-top: 1.75rem;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
`;
