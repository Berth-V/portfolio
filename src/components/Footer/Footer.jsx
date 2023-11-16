import './Footer.css';
import {useContext} from 'react';
import {Context} from '../Context/Context';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import {IoMdMail} from 'react-icons/io';

function Footer() {
  const {onContactPage} = useContext(Context);
  const justifySwitch = () => {
    onContactPage ? 'onStay' : 'onStart';
  };
  //Framer Motion Variants//
  const footerAnimationVariants = {
    onStart: {height: 'var(--footer-height)'},
    onStay: {
      height: '100dvh',
      transition: {delay: 0.3, duration: 1},
    },
  };
  const retAnimation = {
    start: {pathLength: 0},
    onStay: {
      pathLength: 1,
      transition: {delay: 1.2, duration: 0.5},
    },
    leave: {pathLength: 0},
  };
  const contactAnimationVariants = {
    onStart: {x: 0, y: 0, width: '250px', fontSize: 'var(--footer-icons-size)'},
    onStay: {
      width: 'var(--icon-container-width)',
      fontSize: 'var(--footer-icons-grow)',
      transition: {delay: 0.3, duration: 1.3},
    },
  };

  return (
    <motion.div
      className='footer'
      data-ison={onContactPage}
      onChange={justifySwitch}
      /*Framer Motions Attributtes*/
      variants={footerAnimationVariants}
      animate={onContactPage ? 'onStay' : 'onStart'}
    >
      <motion.div
        className='icon__container'
        /*Framer Motions Attributtes*/
        layout
        variants={contactAnimationVariants}
        animate={onContactPage ? 'onStay' : 'onStart'}
      >
        <NavLink className='icon__navlink' to='mailto:bertv0118@gmail.com'>
          <IoMdMail className='icon' />
        </NavLink>
        <NavLink
          className='icon__navlink'
          to='https://github.com/Berth-V'
          target='_blank'
        >
          <AiFillGithub className='icon' />
        </NavLink>
        <NavLink
          className='icon__navlink'
          to='https://www.linkedin.com/in/albert-villa-5b3260238/'
          target='_blank'
        >
          <AiFillLinkedin className='icon' />
        </NavLink>
        <NavLink
          className='icon__navlink'
          to='https://www.instagram.com/bert.v1/'
          target='_blank'
        >
          <AiFillInstagram className='icon' />
        </NavLink>
        <hr className='icon__separator' />
        <NavLink
          className='icon__navlink'
          to='https://www.instagram.com/bertdevtj/'
          target='_blank'
        >
          <AiFillInstagram className='icon' />
        </NavLink>
      </motion.div>
      <svg
        className='footer__rectangle'
        width='381'
        height='60'
        viewBox='0 0 381 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.rect
          id='Rectangle 1'
          x='1.5'
          y='1.5'
          width='378'
          height='57'
          rx='16.5'
          stroke='#FF5D1C'
          stroke-width='3'
          /*Framer Motions Attributtes*/
          variants={retAnimation}
          animate={onContactPage ? 'onStay' : 'start'}
          exit='leave'
        />
      </svg>
    </motion.div>
  );
}

export default Footer;
