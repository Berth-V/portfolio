import '../Footer/Footer.css';
import {forwardRef} from 'react';
import {NavLink} from 'react-router-dom';
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {IoMdMail} from "react-icons/io";

const Footer = forwardRef((props, ref)=> {
  return (
    <div className='footer' ref={ref}>
      <div className='icon__container'>
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
    </div>
  )
}
)

export default Footer;