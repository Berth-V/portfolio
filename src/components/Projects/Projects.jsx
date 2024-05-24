import '../Projects/Projects.css';
import PrevButton from '../Shared/PrevButton/PrevButton';
import NextButton from '../Shared/NextButton/NextButton';
import Card from './Card';
import medical from '../../assets/medical.jpg';
import villas from '../../assets/villas.jpg';
import toptier from '../../assets/toptier.avif';
import kateshop from '../../assets/kateshop.jpg';
import taskmanager from '../../assets/taskmanager.jpg';
import {motion} from 'framer-motion';

function Projects() {
  const cardData = [
    {
      img: medical,
      tittle: 'Medical Travel Mexico/React Js',
      website: 'https://medicaltravelmx.com',
      code: 'https://github.com/Berth-V/medicaltravelmexico',
      parragraph:
        'This WebSite promotted services from a Medical & Travel company resided in Mexico.',
    },
    {
      img: villas,
      tittle: 'Villas Power Sweeping/React Js',
      website: 'https://villaspowersweeping.com/',
      code: 'https://github.com/Berth-V/villaspowersweeping',
      parragraph:
        'This WebSite promotted services from a company called Villas Power Sweeping, that provides sweep cleaning services in San Diego county, in California.',
    },
    {
      img: toptier,
      tittle: 'Top Tier Termite Control/React Js',
      website: 'https://toptiertermite.com/',
      code: 'https://github.com/Berth-V/toptiertermite',
      parragraph:
        'This WebSite promotted Top-Tier Termite Control, a termite infestation.',
    },
    {
      img: taskmanager,
      tittle: 'Task Manager useReducer/React Js ',
      website: 'https://berth-v.github.io/taskmanager/',
      code: 'https://github.com/Berth-V/taskmanager',
      parragraph:
        'This is a Task Manager builded with useReducer hook & Local Storage property.',
    },
    {
      img: kateshop,
      tittle: 'KateShop/Javascript',
      website: 'https://berth-v.github.io/kateshop/',
      code: 'https://github.com/Berth-V/kateshop',
      parragraph:
        'This is my first noob project called KateShop, a Cake Shop for a non-launched business, created with pure Javascript.',
    },
  ];
  //Framer Motion Constant//
  const MotionCard = motion(Card);
  //Framer Motion Variants//
  const cardAnimations = {
    start: {opacity: 0, y: 50},
    onStay: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    leave: {opacity: 0, y: 50},
  };

  return (
    <div className='projects'>
      <motion.div
        className='projects__container'
        /*Framer Motions Attributtes*/
        variants={cardAnimations}
        initial='start'
        animate='onStay'
        exit='leave'
      >
        <motion.h1
          className='projects__h1'
          /*Framer Motions Attributtes*/
          variants={cardAnimations}
        >
          Projects
        </motion.h1>
        <motion.div
          className='projects__box'
          /*Framer Motions Attributtes*/
          variants={cardAnimations}
        >
          {cardData.map((card, index) => (
            <MotionCard
              key={index}
              tittle={card.tittle}
              img={card.img}
              parragraph={card.parragraph}
              website={card.website}
              code={card.code}
              /*Framer Motions Attributtes*/
              variants={cardAnimations}
            />
          ))}
        </motion.div>
      </motion.div>
      <PrevButton to='/about' />
      <NextButton to='/contact' />
    </div>
  );
}

export default Projects;
