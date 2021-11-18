type ProjectList = ProjectItem[];

type ProjectItem = {
  title: string;
  thumbnail: string;
  summary: string;
  versions: Version[];
  techStacks: string[];
  liveUrl: string;
  githubUrl: string;
};

type Version = {
  num: string;
  objs: string[];
};

export const projectList: ProjectList = [
  {
    title: 'Lexie/devlog',
    thumbnail: './assets/img/devlog.jpg',
    summary: '개발 블로그',
    versions: [
      {
        num: '1.0',
        objs: ['실사용 가능한 웹 사이트 제작', 'Gatsby 기반의 Static Site 제작'],
      },
    ],
    techStacks: ['React', 'TypeScript', 'GraphQl', 'CSS-in-JS(Emotion)'],
    liveUrl: 'https://lexie-kaia.github.io/',
    githubUrl: 'https://github.com/lexie-kaia/lexie-kaia.github.io',
  },
  {
    title: 'Tweeter',
    thumbnail: './assets/img/tweeter-sequence.gif',
    summary: 'Twitter 클론 코딩',
    versions: [
      {
        num: '1.0',
        objs: [
          'Mobile-First Web App 구조 분석',
          'HTML, CSS, JavaScript 기본 스택을 이용한 클론 코딩',
        ],
      },
      {
        num: '2.0',
        objs: [
          'Web Component를 활용한 구조화',
          'TypeScript, Sass(SCSS), Webpack 개발 스택 업그레이드',
        ],
      },
    ],
    techStacks: ['TypeScript', 'Sass(SCSS)', 'Webpack'],
    liveUrl: 'https://lexie-kaia.github.io/tweeter/',
    githubUrl: 'https://github.com/lexie-kaia/tweeter',
  },
  {
    title: 'Grid Generator',
    thumbnail: './assets/img/grid-generator.jpg',
    summary:
      'Bootstrap Grid System을 커스터마이징하여 사용할 수 있는 Grid CSS 코드를 생성하는 프로그램',
    versions: [
      {
        num: '1.0',
        objs: ['재사용 가능한 프로그램 개발', 'Vanilla JS의 Class 활용'],
      },
      // { num: '2.0', objs: ['Class 구조 Inheritance → Composition으로 개선'] },
    ],
    techStacks: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lexie-kaia.github.io/grid-generator/',
    githubUrl: 'https://github.com/lexie-kaia/grid-generator',
  },
  {
    title: 'Nettube',
    thumbnail: './assets/img/nettube.jpg',
    summary: 'Youtube 클론 코딩',
    versions: [{ num: '1.0', objs: ['Vanilla JS를 활용한 프론트엔드와 백엔드 구현'] }],
    techStacks: ['JavaScript', 'Sass(SCSS)', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://dry-atoll-77453.herokuapp.com/',
    githubUrl: 'https://github.com/lexie-kaia/Nettube',
  },
  {
    title: 'MOTV',
    thumbnail: './assets/img/motv.jpg',
    summary: 'React와 IMDB API를 활용한 영화,TV 프로그램 앱',
    versions: [{ num: '1.0', objs: ['React의 활용한 기본적인 SPA 구현 및 반응형 UI 디자인'] }],
    techStacks: ['React'],
    liveUrl: 'https://confident-clarke-58063e.netlify.app/',
    githubUrl: 'https://github.com/lexie-kaia/react_motv',
  },
];
