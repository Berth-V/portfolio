import '../About/About.css';
import PrevButton from '../Shared/PrevButton/PrevButton';
import NextButton from '../Shared/NextButton/NextButton';
import {motion} from 'framer-motion';
import {DiHtml5, DiCss3, DiJavascript} from 'react-icons/di';
import {SiReact, SiFramer} from 'react-icons/si';
import {BsGit} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

function About() {
  //Framer Motion Variants//
  const skillsAnimation = {
    start: {scale: 0},
    onStay: {
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    leave: {scale: 0},
  };

  return (
    <div className='about'>
      <div className='about__content'>
        <motion.div
          className='about__description'
          /*Framer Motions Attributtes*/
          variants={skillsAnimation}
          initial='start'
          animate='onStay'
          exit='leave'
        >
          <motion.h1
            className='about__h1'
            /*Framer Motions Attributtes*/
            variants={skillsAnimation}
          >
            About
          </motion.h1>
          <motion.p
            className='about__p'
            /*Framer Motions Attributtes*/
            variants={skillsAnimation}
          >
            Hi again, my name is Albert, i am 26 years old at present and i was
            born and growed in the city of Tijuana, Baja California, México.
            <br />
            I am a self-learning front-end developer, but at my free time
            i&rsquo;m actually learning new areas like back-end, and i also
            interested to learn mobile aplications dev.
            <br />I have a pair of hobbies, but i think that the most
            outstanding one, will be dancing, i have beeing in a folclorick
            dance group since my 12 years and i like to express my self by that
            way.
          </motion.p>
        </motion.div>
        <motion.hr
          className='separator'
          /*Framer Motions Attributtes*/
          variants={skillsAnimation}
          initial='start'
          animate='onStay'
          exit='leave'
        />
        <motion.div
          className='about__skills'
          /*Framer Motions Attributtes*/
          variants={skillsAnimation}
          initial='start'
          animate='onStay'
          exit='leave'
        >
          <h1 className='about__h1'>Skills</h1>
          <div className='about__ul'>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <DiHtml5 className='about__icon' />
              <span className='icon__span'>HTML</span>
            </motion.div>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <DiCss3 className='about__icon' />
              <span className='icon__span'>CSS</span>
            </motion.div>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <DiJavascript className='about__icon' />
              <span className='icon__span'>Javascript</span>
            </motion.div>
          </div>
          <div className='about__ul'>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <SiReact className='about__icon' />
              <span className='icon__span'>React Js</span>
            </motion.div>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <SiFramer className='about__icon' />
              <span className='icon__span'>Framer Motion</span>
            </motion.div>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <BsGit className='about__icon' />
              <span className='icon__span'>Git</span>
            </motion.div>
            <motion.div
              className='about__li'
              /*Framer Motions Attributtes*/
              variants={skillsAnimation}
            >
              <AiFillGithub className='about__icon' />
              <span className='icon__span'>Github</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <PrevButton to='/' />
      <NextButton to='/projects' />
    </div>
  );
}

export default About;
