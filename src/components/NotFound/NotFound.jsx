import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './NotFound.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const NotFound = () => {

   const [letterClass, setLetterClass] = useState('text-animate');
   const errorArray = ['4', '0', '4'];

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
         <Loader type='pacman'/>
      </>
   )
};

export default NotFound;