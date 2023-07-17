import './Header.css';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {AiFillHome} from 'react-icons/ai'
import {IoMdListBox} from 'react-icons/io'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {MdContacts} from 'react-icons/md'

function Header() {
  
  //Framer Motion variants//
  
  const hoverVariants={
    hover:{
      scale: 1.2,
      color:'var(--secondary-color)'
    }
  }

  return (
    <nav className='nav'>
      <ul className='nav__ul'>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/'>
            <AiFillHome className='nav__icon'/>
            <span className='nav__span'>Home</span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/about'>
            <IoMdListBox className='nav__icon'/>
            <span className='nav__span'>About</span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/projects'>
            <BsFillFileEarmarkCodeFill className='nav__icon'/>
            <span className='nav__span'>Projects</span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/contact'>
            <MdContacts className='nav__icon'/>
            <span className='nav__span'>Contact</span>
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  )
}

export default Header;