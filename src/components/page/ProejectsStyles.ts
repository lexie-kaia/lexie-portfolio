import styled from '@emotion/styled';

export const Projects = styled.section`
  min-height: calc(100vh - 13rem);
  height: 100%;
  padding: 2rem 0;
`;

export const SectionH1 = styled.h1`
  margin-bottom: 1.25rem;
`;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
`;

export const ProjectItem = styled.li`
  /* border: 1px solid red; */
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
  width: 100%;
  height: 280px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailLink = styled.a``;

export const Title = styled.h2`
  margin-bottom: 0.25rem;
`;

export const TechStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
  font-weight: 500;
`;

export const TechStackItem = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  &:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const Summary = styled.div`
  margin-bottom: 0.75rem;
`;

export const VersionList = styled.ul`
  margin-bottom: 2rem;
`;

export const VersionItem = styled.li`
  margin-bottom: 0.75rem;
`;

export const VersionNum = styled.span`
  font-weight: 500;
`;

export const ObjList = styled.ul`
  margin-left: 1.5rem;
  list-style: disc;
`;

export const ObjItem = styled.li``;

export const ViewList = styled.ul``;

export const ViewItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const ViewButton = styled.a`
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
