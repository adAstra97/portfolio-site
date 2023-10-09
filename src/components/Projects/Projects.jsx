import { useEffect, useState } from 'react';
import './Projects.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Projects = () => {
   const [letterClass, setLetterClass] = useState('text-animate');

   useEffect(() => {
      setTimeout(() => {
         return setLetterClass('text-animate-hover');
      }, 3000);
   }, []);

   return (
      <div className='container projects-page'>
         <div className="text-zone">
            <h1>
               <AnimatedLetters strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e ', 'c', 't', 's']} letterClass={letterClass} idx={11} />
            </h1>
         </div>
      </div>
   )
};

export default Projects;