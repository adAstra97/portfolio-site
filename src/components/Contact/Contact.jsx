import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const MySwal = withReactContent(Swal)

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [isSending, setIsSending] = useState(false);

   const [letterClass, setLetterClass] = useState('text-animate');
   const form = useRef();

   useEffect(() => {
      setTimeout(() => {
         return setLetterClass('text-animate-hover');
      }, 3000);
   }, []);

   const sendEmail = (e) => {
      e.preventDefault();

      setIsSending(true);

      emailjs.sendForm('service_h4mb202', 'template_oiy4lon', form.current, '4NZIa3jaFAv14LwGd')
         .then((result) => {
            setIsSending(false);

            MySwal.fire({
               title: 'Thanks for your message!',
               text: "I will contact you soon",
               icon: 'success',
               confirmButtonText: 'Excellent',
               confirmButtonColor: 'rgb(233, 33, 255)',
            })
            .then(() => {
               setName('');
               setEmail('');
               setSubject('');
               setMessage('');
            });
         }, (error) => {
            setIsSending(false);

            MySwal.fire({
               title: 'Failed to send the message, please try again later',
               icon: 'error',
               confirmButtonText: 'Close',
               confirmButtonColor: 'rgb(233, 33, 255)',
            })
         });

   };

   return (
      <>
         <div className='container contact-page'>
            <div className="text-zone">
               <h1>
                  <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} letterClass={letterClass} idx={15} />
               </h1>
               <p>
                  If you have any questions or suggestions, I would be happy to answer them and provide more details about my experience and skills.
               </p>
               <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                     <ul>
                        <li className='half'>
                           <input type="text" name='name' placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />
                        </li>
                        <li className='half'>
                           <input type="email" name='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li>
                           <input placeholder="Subject" type="text" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </li>
                        <li>
                           <textarea placeholder='Message' name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </li>
                        <li>
                           <input type="submit" className='flat-button' value="Send" />
                        </li>
                     </ul>
                  </form>
               </div>
            </div>
            {isSending && <Loader type='pacman'/>}
         </div>
         <Loader type='pacman'/>
      </>
   )
};

export default Contact;