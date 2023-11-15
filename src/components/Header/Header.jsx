import './Header.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {AiFillHome} from 'react-icons/ai';
import {IoMdListBox} from 'react-icons/io';
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs';
import {MdContacts} from 'react-icons/md';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Framer Motion Variants//
  const menuBtnVariants = {
    start: {
      transform: 'rotate(0)',
      transition: {duration: 0.1},
    },
    end: {
      transform: 'rotate(180deg)',
      transition: {duration: 0.1},
    },
  };
  const navMenuVariables = {
    hover: {
      scale: 1.2,
      color: 'var(--secondary-color)',
    },
  };
  const openNavAnimation = {
    open: {
      left: '0',
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.5,
      },
    },
    close: {left: '-100vw'},
  };

  return (
    <motion.nav
      className='nav'
      /*Framer Motions Attributtes*/
      variants={openNavAnimation}
      animate={isMenuOpen ? 'open' : 'close'}
    >
      <motion.div
        className='menu__btn'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        /*Framer Motions Attributtes*/
        variants={menuBtnVariants}
        animate={isMenuOpen ? 'end' : 'start'}
      >
        &gt;
      </motion.div>
      <ul className='nav__ul'>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
          variants={navMenuVariables}
          whileHover={'hover'}
        >
          <NavLink
            className='nav__link'
            to='/'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AiFillHome className='nav__icon' />
            <span className='nav__span'>Home</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
          variants={navMenuVariables}
          whileHover={'hover'}
        >
          <NavLink
            className='nav__link'
            to='/about'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdListBox className='nav__icon' />
            <span className='nav__span'>About</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
          variants={navMenuVariables}
          whileHover={'hover'}
        >
          <NavLink
            className='nav__link'
            to='/projects'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <BsFillFileEarmarkCodeFill className='nav__icon' />
            <span className='nav__span'>Projects</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
          variants={navMenuVariables}
          whileHover={'hover'}
        >
          <NavLink
            className='nav__link'
            to='/contact'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MdContacts className='nav__icon' />
            <span className='nav__span'>Contact</span>
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Header;
