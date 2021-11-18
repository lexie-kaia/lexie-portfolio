import React from 'react';
import * as S from './ProejectsStyles';
import { projectList } from '../../data/project-list';
import img from '../../assets/img/devlog.jpg';

export default function Projects() {
  return (
    <S.Projects>
      <S.SectionH1>Projects</S.SectionH1>
      <S.ProjectList>
        {projectList.map(project => (
          <S.ProjectItem key={project.title}>
            <S.Thumbnail>
              <S.ThumbnailLink href={project.liveUrl} target="_blank">
                <img src={project.thumbnail} alt={project.title} />
              </S.ThumbnailLink>
            </S.Thumbnail>

            <S.Title>{project.title}</S.Title>

            <S.TechStackList>
              {project.techStacks.map(techStack => (
                <S.TechStackItem>{techStack}</S.TechStackItem>
              ))}
            </S.TechStackList>
            <S.Summary>{project.summary}</S.Summary>

            <S.VersionList>
              {project.versions.map(version => (
                <S.VersionItem>
                  {project.versions.length > 1 && <S.VersionNum>{`V ${version.num}`}</S.VersionNum>}
                  <S.ObjList>
                    {version.objs.map(obj => (
                      <S.ObjItem>{obj}</S.ObjItem>
                    ))}
                  </S.ObjList>
                </S.VersionItem>
              ))}
            </S.VersionList>

            <S.ViewList>
              <S.ViewItem>
                <S.ViewButton href={project.liveUrl} target="_blank">
                  View Live &gt;
                </S.ViewButton>
              </S.ViewItem>
              <S.ViewItem>
                <S.ViewButton href={project.githubUrl} target="_blank">
                  View gitHub &gt;
                </S.ViewButton>
              </S.ViewItem>
            </S.ViewList>
          </S.ProjectItem>
        ))}
      </S.ProjectList>
    </S.Projects>
  );
}
