type ProjectList = ProjectItem[];

type ProjectItem = {
  title: string;
  thumbnail: string;
  summary: string;
  versions: Version[];
  techStacks: string[];
  liveUrl: string;
  githubUrl: string;
  imageList: string[];
};

type Version = {
  num: string;
  objs: string[];
};

export const projectList: ProjectList = [
  {
    title: 'Tech Blog',
    thumbnail: '#',
    summary: 'Gatsby기반 개인 개발 블로그',
    versions: [
      {
        num: '1.0',
        objs: [
          '실사용 가능한 웹사이트 제작',
          'Gatsby의 SSG을 활용한 Static Site 제작',
        ],
      },
    ],
    techStacks: ['React', 'TypeScript', 'GraphQl', 'CSS-in-JS(Emotion)'],
    liveUrl: '#',
    githubUrl: '#',
    imageList: [],
  },
  {
    title: 'Tweeter',
    thumbnail: '#',
    summary: 'Twitter 클론 코딩',
    versions: [
      {
        num: '1.0',
        objs: [
          'Mobile-first web app 구조 분석',
          'HTML, CSS, JavaScript 기본 스택을 이용한 클론 코딩',
        ],
      },
      {
        num: '2.0',
        objs: [
          'Web component를 활용한 구조화',
          'TypeScript, Sass(SCSS), Webpack 개발 스택 업그레이드',
        ],
      },
    ],
    techStacks: ['TypeScript', 'Sass(SCSS)', 'Webpack'],
    liveUrl: '#',
    githubUrl: '#',
    imageList: [],
  },
  {
    title: 'Bootstrapy Grid System CSS Code Generator',
    thumbnail: '#',
    summary:
      'Bootstrap Grid System을 커스터마이징하여 CSS 코드를 생성하는 프로그램',
    versions: [
      {
        num: '1.0',
        objs: ['재사용 가능한 프로그램 개발', 'Vanilla JS의 Class 활용'],
      },
      { num: '2.0', objs: ['Class 구조 Inheritance → Composition으로 개선'] },
    ],
    techStacks: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    imageList: [],
  },
  {
    title: 'MOTV',
    thumbnail: '#',
    summary: 'React와 IMDB API를 활용한 영화,TV 프로그램 앱',
    versions: [
      { num: '1.0', objs: ['React의 활용한 기본적인 SPA 구현 및 UI 디자인'] },
    ],
    techStacks: ['React'],
    liveUrl: '#',
    githubUrl: '#',
    imageList: [],
  },
  {
    title: 'Nettube',
    thumbnail: '#',
    summary: 'Youtube 클론 코딩',
    versions: [
      { num: '1.0', objs: ['Vanilla JS를 활용한 프론트엔드와 백엔드 구현'] },
    ],
    techStacks: ['JavaScript', 'Node.js', 'Express', 'Sass(SCSS)'],
    liveUrl: '#',
    githubUrl: '#',
    imageList: [],
  },
];
