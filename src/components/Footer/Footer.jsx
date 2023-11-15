import './Footer.css';
import {useContext} from 'react';
import {Context} from '../Context/Context';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import {IoMdMail} from 'react-icons/io';

function Footer() {
  const {onContactPage} = useContext(Context);
  //Framer Motion Variants//
  const footerAnimationVariants = {
    onStart: {height: 'var(--footer-height)'},
    onStay: {
      height: '100dvh',
      transition: {delay: 0.3, duration: 1},
    },
  };
  const contactAnimationVariants = {
    onStart: {x: 0, y: 0, width: '250px', fontSize: 'var(--footer-icons-size)'},
    onStay: {
      width: 'var(--icon-container-width)',
      fontSize: 'var(--footer-icons-grow)',
      transition: {delay: 0.3, duration: 1.3},
    },
  };
  const justifySwitch = () => {
    onContactPage ? 'onStay' : 'onStart';
  };

  return (
    <motion.div
      className='footer'
      data-ison={onContactPage}
      onChange={justifySwitch}
      variants={footerAnimationVariants}
      animate={onContactPage ? 'onStay' : 'onStart'}
    >
      <motion.div
        className='icon__container'
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
    </motion.div>
  );
}

export default Footer;
