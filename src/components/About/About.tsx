import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faGithubSquare, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
   const [letterClass, setLetterClass] = useState<string>('text-animate');

   useEffect(() => {
      setTimeout(() => {
         return setLetterClass('text-animate-hover');
      }, 3000);
   }, []);

   return (
      <>
         <div className='container about-page'>
            <div className="text-zone">
               <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
               </h1>
               <p>
                  Hello! My name is Veronika, and I am a Frontend developer. I'm passionate about creating interactive and functional user interfaces for web applications.
               </p>
               <p>
                  My goal is to become an experienced professional in frontend development and contribute to the creation of user-friendly and efficient online tools.
               </p>
               <p>
                  I have skills in HTML, CSS, JavaScript and TypeScript, which are the foundation of web development. I am familiar with various frameworks and libraries like React JS and Phaser JS, and I aim to deep dive into learning them.
               </p>
            </div>

            <div className='stage-cube-cont'>
               <div className="cubespinner">
                  <div className="face1">
                     <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                  </div>
                  <div className="face2">
                     <FontAwesomeIcon icon={faReact} color='#28A4D9'/>
                  </div>
                  <div className="face3">
                     <FontAwesomeIcon icon={faJs} color='#EFD81D'/>
                  </div>
                  <div className="face4">
                     <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                  </div>
                  <div className="face5">
                     <FontAwesomeIcon icon={faCss3} color='#5ED4F4'/>
                  </div>
                  <div className="face6">
                     <FontAwesomeIcon icon={faGithubSquare}  color='#000000'/>
                  </div>
               </div>
            </div>
         </div>
         <Loader type='pacman' active={true}/>
      </>
   )
};

export default About;