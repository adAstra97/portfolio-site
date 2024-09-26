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
      title: 'Todo App',
      topics: 'TypeScript, React JS Hooks, React Icons',
      image: './images/Todo-app.png',
      link: 'https://todo-app-red-black.netlify.app/',
   },
   {
      id: 2,
      title: 'Landing',
      topics: 'Pug, Scss, Slick Slider, Grid, Flexbox',
      image: './images/landing.png',
      link: 'https://adastra97.github.io/examWork/public/',
   },
   {
      id: 3,
      title: 'Calculator',
      topics: 'React Hook Reducer, Tailwind CSS',
      image: './images/calculator.png',
      link: 'https://calculator-syrniki.netlify.app/',
   },
   {
      id: 4,
      title: 'Handmade Shop',
      topics: 'HTML, CSS, Vanilla JS, Hash routing, SPA, API',
      image: './images/handmade-shop.png',
      link: 'https://handmade-shop-api.netlify.app/',
   },
   {
      id: 5,
      title: 'Game "A way at home"',
      topics: 'HTML, CSS, Phaser JS, Vanilla JS, Tiled, Sounds',
      image: './images/game.png',
      link: 'https://way-at-home.netlify.app/',
   },
   {
      id: 6,
      title: 'Movie APP',
      topics: 'Pug, SCSS, Vanilla JS, Firebase, SweetAlert, Swiper',
      image: './images/movie-app.png',
      link: 'https://entertainment-web-app-qwe.netlify.app/',
   },
   {
      id: 7,
      title: 'Coffee House',
      topics: 'HTML, SCSS, Vanilla JS, slider, tabs, modal window',
      image: './images/coffee-house.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-JSFE2023Q4/coffee-house/',
   },
   {
      id: 9,
      title: 'My portfolio',
      topics: 'React, Swiper, TypeScript, animations',
      image: './images/portfolio.png',
      link: 'https://portfolio-verman.netlify.app/',
   },
   {
      id: 10,
      title: 'Game: "Hangman"',
      topics: 'HTML, SCSS, Vanilla JS, virtual keyboard, Prettier, ESLint',
      image: './images/hangman.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-JSFE2023Q4/hangman/',
   },
   {
      id: 11,
      title: 'YouTube Client App',
      topics: 'Angular, Angular Material, TypeScript, NgRx, RxJS, Prettier, ESLint',
      image: './images/youtube-client.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-ANGULAR2024Q3/#/main',
   },
   {
      id: 12,
      title: 'Train App',
      topics: 'Angular, Angular Material, TypeScript, NgRx, RxJS, Prettier, ESLint',
      image: './images/train.png',
      link: 'https://train-kvda-2.netlify.app/',
   }
];
