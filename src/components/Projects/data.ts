interface IProject {
   id: number;
   title: string;
   topics: string;
   image: string;
   link: string;
}

export const projects: IProject[] = [
   {
      id: 1,
      title: 'Landing',
      topics: 'Pug, Scss, Slick Slider, Grid, Flexbox',
      image: './images/landing.png',
      link: 'https://adastra97.github.io/examWork/public/',
   },
   {
      id: 2,
      title: 'Game "A way at home"',
      topics: 'HTML, CSS, Phaser JS, Vanilla JS, Tiled, Sounds',
      image: './images/game.png',
      link: 'https://way-at-home.netlify.app/',
   },
   {
      id: 3,
      title: 'Movie APP',
      topics: 'Pug, SCSS, Vanilla JS, Firebase, SweetAlert, Swiper',
      image: './images/movie-app.png',
      link: 'https://entertainment-web-app-qwe.netlify.app/',
   },
   {
      id: 4,
      title: 'Landing SagTech',
      topics: 'Next.js, TypeScript, SSG, Tailwind CSS, ZOD, GrapQL, Framer Motion',
      image: './images/sagtech.png',
      link: 'https://sagtech.io/',
   },
   {
      id: 5,
      title: 'Coffee House',
      topics: 'HTML, SCSS, Vanilla JS, slider, tabs, modal window',
      image: './images/coffee-house.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-JSFE2023Q4/coffee-house/',
   },
   {
      id: 6,
      title: 'My portfolio',
      topics: 'React, Swiper, TypeScript, animations',
      image: './images/portfolio.png',
      link: 'https://portfolio-verman.netlify.app/',
   },
   {
      id: 7,
      title: 'Game: "Hangman"',
      topics: 'HTML, SCSS, Vanilla JS, virtual keyboard, Prettier, ESLint',
      image: './images/hangman.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-JSFE2023Q4/hangman/',
   },
   {
      id: 8,
      title: 'English Puzzle',
      topics: 'TypeScript, FSD, commitlint, stylelint, Vite, SCSS, Prettier, ESLint',
      image: './images/puzzle.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-JSFE2023Q4/rss-puzzle/',
   },
   {
      id: 9,
      title: 'YouTube Client App',
      topics: 'Angular, Angular Material, TypeScript, NgRx, RxJS, Prettier, ESLint',
      image: './images/youtube-client.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-ANGULAR2024Q3/#/main',
   },
   {
      id: 10,
      title: 'REST Client',
      topics: 'Next.js, next-intl, TypeScript, Firebase Auth, Tailwind CSS, Vitest',
      image: './images/rest-client.png',
      link: 'https://reactive-rest-client.netlify.app/',
   },
];
