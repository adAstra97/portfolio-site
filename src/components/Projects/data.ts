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
      title: 'Password Generator',
      topics: 'HTML, CSS, Vanilla JS, Map collection',
      image: './images/pass-generator.png',
      link: 'https://adastra97.github.io/password-generator/',
   },
   {
      id: 8,
      title: 'Coffee House',
      topics: 'HTML, SCSS, Vanilla JS, slider, tabs, modal window',
      image: './images/coffee-house.png',
      link: 'https://rolling-scopes-school.github.io/adastra97-JSFE2023Q4/coffee-house/',
   }
];