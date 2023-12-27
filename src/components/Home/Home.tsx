import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import './Home.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
   const [letterClass, setLetterClass] = useState<string>('text-animate');
   const greetingArray: string[] = ['H', 'i', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e', ','];
   const nameArray: string[] = ['e', 'r', 'o', 'n', 'i', 'k', 'a'];
   const jobArray: string[] = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '👩‍💻'];

   useEffect(() => {
      setTimeout(() => {
         return setLetterClass('text-animate-hover');
      }, 4900);
   }, []);

   return (

      <>
         <div className='container home-page'>
            <div className="text-zone">
               <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={12}/>
                  <br />
                  <span className={letterClass + ' _24'}>I</span>
                  <span className={letterClass + ' _25'}>'m</span>
                  <span className={`big-letter ${letterClass} _26`}>V</span>
                  <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={27}/>
                  <br />
                  <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={34}/>
               </h1>
               <h2>Frontend Developer / TypeScript / React JS</h2>
               <Link to="/contact" className='flat-button'>
                  CONTACT ME
               </Link>
            </div>
         </div>
         <Loader type='pacman' active={true}/>
      </>
   )
};

export default Home;