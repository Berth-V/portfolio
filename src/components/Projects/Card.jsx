import '../Projects/Projects.css'
import {NavLink} from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {TbWorldWww} from 'react-icons/tb'

function Card(props) {
  return (
    <div className='projects__precard'>
      <h2 className='projects__h2'>{props.tittle}</h2>
      <div className='projects__card'>
        <div className='projects__btn__box'>
          <NavLink className='projects__btn'>
            <TbWorldWww className='projects__icon'/>
            Website
          </NavLink>
          <NavLink className='projects__btn'>
            <AiFillGithub className='projects__icon'/>
            Code
          </NavLink>
        </div>
        <div className='projects__description'>
          <div className='projects__img'
            style={{background:`url(${props.img}) no-repeat center/100%`}} 
          />
          <p className='projects__text'>
            This Website promotted Yoneme, a folclorick dance group from Tijuana 
            city, in Mexico.
          </p>  
        </div>
      </div>
    </div>
  )
}

export default Card
