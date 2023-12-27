import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './NotFound.scss';

const NotFound = () => {

   const [letterClass, setLetterClass] = useState<string>('text-animate');
   const errorArray: string[] = ['4', '0', '4'];

   useEffect(() => {
      setTimeout(() => {
         return setLetterClass('text-animate-hover');
      }, 3000);
   }, []);

   return (
      <>
         <div className='container notfound-page'>
            <div className="text-zone">
               <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={errorArray} idx={11}/>
               </h1>
               <span>Page not found</span>
               <Link className="flat-button" to="/">Click to go home</Link>
            </div>
         </div>
         <Loader type='pacman' active={true}/>
      </>
   )
};

export default NotFound;