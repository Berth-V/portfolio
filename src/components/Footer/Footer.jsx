import '../Footer/Footer.css';
import {useContext} from 'react';
import {Context} from '../../context/Context';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {IoMdMail} from "react-icons/io";

function Footer() {
  const {onContactPage}=useContext(Context);
  const footerAnimationVariants={
    onStart:{y:0},
    onStay:{y:250,scale:3},
    onLeave:{y:0,x:0}
  }
  return (
    <motion.div className='footer'
      variants={footerAnimationVariants}
      initial={'onStart'}
      animate={onContactPage&& 'onStay'}
      exit={'onLeave'}
    >
      <div className='icon__container'>
        {console.log(onContactPage)}
        <NavLink className='icon__navlink'
          to='mailto:bertv0118@gmail.com'
        >
          <IoMdMail className='icon'/>
        </NavLink>
        <NavLink className='icon__navlink'
          to='https://github.com/Berth-V'  target='_blank' 
        >
          <AiFillGithub  className='icon' />
        </NavLink>
        <NavLink className='icon__navlink'
          to='https://www.linkedin.com/in/albert-villa-5b3260238/' target='_blank'
        >
          <AiFillLinkedin  className='icon'/>
        </NavLink>
        <NavLink className='icon__navlink'
          to='https://www.instagram.com/bert.v1/'  target='_blank' 
        >
          <AiFillInstagram  className='icon'/>
        </NavLink>
        <hr className='icon__separator'/>
        <NavLink className='icon__navlink'
          to='https://www.instagram.com/bertdevtj/'  target='_blank' 
        >
          <AiFillInstagram  className='icon'/>
        </NavLink>
      </div>
    </motion.div>
  )
}


export default Footer;