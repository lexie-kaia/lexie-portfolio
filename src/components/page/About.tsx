import React from 'react';
import * as S from './AboutStyles';

export default function About() {
  return (
    <S.About>
      <S.LeftCol>
        <S.SectionH1>About</S.SectionH1>
        <S.SectionBody>
          <S.SectionParagraph>
            저는 프로젝트 기간 1년, 운영 비용 2억 이상,
            <br />
            9개의 관련 기업과 기관, 관련 인물 약 100명의
            <br />
            서비스를 직접 기획하고 운영한 경력이 있습니다.
          </S.SectionParagraph>
          <S.SectionParagraph>
            그 시간 동안 같이 하는 사람들을 위해 <br />
            그리고 찾아온 사람들을 위해 <br />이 비지니스가 '<strong>왜</strong>
            ' 있어야 하는지 고민했습니다.
          </S.SectionParagraph>
          <S.SectionParagraph>
            이런 경험이 있기 때문에
            <br />
            저는 <strong>비지니스적인 관점에서의 이해</strong>와
            <br />
            <strong>협업을 위한 커뮤니케이션의 중요성</strong>을 알고 있습니다.
          </S.SectionParagraph>
          <S.SectionParagraph>
            한편으로 이 경험은 현재와 그리고 미래에 <br />
            데이터가 가지는 가치를 체감하는 계기가 되었고, <br />더 나아가{' '}
            <strong>데이터와 사용자의 흐름을 설계하는 것</strong>에 <br />
            전문적인 역할을 하고자 결심하게 되었습니다.
          </S.SectionParagraph>
          <S.SectionParagraph>
            저는 <strong>프론트엔드 개발자 김가연</strong>입니다.
            <br />
            <strong>
              사용자와 데이터를 마주하는 시작점에서
              <br />
              최적의 전략을 만드는 개발자
            </strong>
            가 되겠습니다.
          </S.SectionParagraph>
        </S.SectionBody>
      </S.LeftCol>
      <S.RightCol>
        <S.SectionH1>Skills</S.SectionH1>
        <S.SectionBody>
          <S.SectionH2>JavaScript Ecosystem</S.SectionH2>
          <S.SkillList>
            <S.SkillItem>JavaScript</S.SkillItem>
            <S.SkillItem>TypeScript</S.SkillItem>
            <S.SkillItem>React</S.SkillItem>
            <S.SkillItem>Node.js</S.SkillItem>
          </S.SkillList>
          <S.SectionH2>Web Fundamentals</S.SectionH2>
          <S.SkillList>
            <S.SkillItem>HTML</S.SkillItem>
            <S.SkillItem>CSS</S.SkillItem>
            <S.SkillItem>Sass(SCSS)</S.SkillItem>
            <S.SkillItem>Webpack</S.SkillItem>
          </S.SkillList>
          <S.SectionH2>Graphic Tools</S.SectionH2>
          <S.SkillList>
            <S.SkillItem>Adobe Suites</S.SkillItem>
            <S.SkillItem>Figma</S.SkillItem>
          </S.SkillList>
        </S.SectionBody>
      </S.RightCol>
    </S.About>
  );
}
