import '../Projects/Projects.css';
import PrevButton from '../Shared/PrevButton/PrevButton';
import NextButton from '../Shared/NextButton/NextButton';
import Card from './Card';
import medical from '../../assets/medical.jpg';
import villas from '../../assets/villas.jpg';
import yoneme from '../../assets/yoneme.jpg';
import kateshop from '../../assets/kateshop.jpg';
import {motion} from 'framer-motion';

function Projects() {
  const MotionCard = motion(Card);
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
      img: yoneme,
      tittle: 'Yoneme/React Js',
      website: 'https://yoneme.com/',
      code: 'https://github.com/Berth-V/yoneme',
      parragraph:
        'This WebSite promotted Yoneme, a folclorick dance group from Tijuana city, in Mexico.',
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
        variants={cardAnimations}
        initial='start'
        animate='onStay'
        exit='leave'
      >
        <motion.h1 className='projects__h1' variants={cardAnimations}>
          Projects
        </motion.h1>
        <motion.div className='projects__box' variants={cardAnimations}>
          {cardData.map((card, index) => (
            <MotionCard
              variants={cardAnimations}
              key={index}
              tittle={card.tittle}
              img={card.img}
              parragraph={card.parragraph}
              website={card.website}
              code={card.code}
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