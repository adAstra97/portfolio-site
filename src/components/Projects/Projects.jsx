import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { projects } from './data';
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
         <div className="projects">
            <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={'auto'}
               coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 60,
                  modifier: 1,
                  slideShadows: true,
               }}
               pagination={{
                  type: 'progressbar',
               }}
               navigation={true}
               modules={[EffectCoverflow, Pagination, Navigation]}
            >
               {projects.map(project => {
                  return (
                     <SwiperSlide className='project' key={project.id}>
                        <img src={project.image} alt="image" />
                        <div className='project__info'>
                           <span className='project__title'>{project.title}</span>
                           <span className='project__topics'>{project.topics}</span>
                           <a href={project.link} target='_blank' className='project__link'>Open the project</a>
                        </div>
                     </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>
      </div>
   )
};

export default Projects;