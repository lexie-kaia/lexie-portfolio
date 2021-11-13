import React from 'react';
import * as S from './ProejectsStyles';
import { projectList } from '../../data/project-list';

export default function Projects() {
  return (
    <S.Projects>
      <S.SectionH1>Projects</S.SectionH1>
      <S.ProjectList>
        {projectList.map(project => (
          <S.ProjectItem key={project.title}>
            <S.Thumbnail />

            <S.Title>{project.title}</S.Title>

            <S.Summary>{project.summary}</S.Summary>

            <S.TechStackList>
              {project.techStacks.map(techStack => (
                <S.TechStackItem>{techStack}</S.TechStackItem>
              ))}
            </S.TechStackList>

            <S.VersionList>
              {project.versions.map(version => (
                <S.VersionItem>
                  <S.VersionNum>{`V ${version.num}`}</S.VersionNum>
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
                <S.ViewButton href={project.liveUrl}>
                  View Live &gt;
                </S.ViewButton>
              </S.ViewItem>
              <S.ViewItem>
                <S.ViewButton href={project.githubUrl}>
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
