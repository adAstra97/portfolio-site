import './AnimatedLetters.scss';

interface IAnimLetters {
   letterClass: string;
   strArray: string[];
   idx: number;
};

const AnimatedLetters = ({ letterClass, strArray, idx }: IAnimLetters) => {
   return (
      <span>
         {
            strArray.map((char, i) => (
               <span key={char + i} className={`${letterClass} _${i + idx}`}>
                  {char}
               </span>
            ))
         }
      </span>
   )
};

export default AnimatedLetters;