import './Home.css';
import NextButton from '../Shared/NextButton/NextButton';
import Logosvg from './Logosvg';
import {motion} from 'framer-motion';

function Home() {
  //Framer Motion Variants//
  const itemsAnimation = {
    start: {opacity: 0, y: 100},
    onStay: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    leave: {y: 10, opacity: 0},
  };

  return (
    <div className='home'>
      <div className='home__container'>
        <motion.div
          className='home__textBox'
          variants={itemsAnimation}
          initial='start'
          animate='onStay'
          exit='leave'
        >
          <motion.h1 className='home__h1' variants={itemsAnimation}>
            React JS Front-End Developer
          </motion.h1>
          <motion.p className='home__p' variants={itemsAnimation}>
            Hi there, I&rsquo;m Albert Villa.
            <br />
          </motion.p>
          <motion.p className='home__p' variants={itemsAnimation}>
            Jr Dev resided in Mexico.
          </motion.p>
        </motion.div>
        <Logosvg />
      </div>
      <NextButton to={'/about'} />
    </div>
  );
}

export default Home;
