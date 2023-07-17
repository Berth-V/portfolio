import '../Projects/Projects.css';
import {forwardRef} from 'react';
import {NavLink} from 'react-router-dom';
import {TbWorldWww} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'

const Card = forwardRef((props, ref) => {

  return (
    <div className='projects__precard' ref={ref}>
      <h2 className='projects__h2'>{props.tittle}</h2>
      <div className='projects__card'>
        <div className='projects__btn__box'>
          <NavLink className='projects__btn' 
            to={props.website}
            target='_blank'
          >
            <TbWorldWww className='projects__icon'/>
            Website
          </NavLink>
          <NavLink className='projects__btn'
            to={props.code} 
            target='_blank'
          >
            <AiFillGithub className='projects__icon'/>
            Code
          </NavLink>
        </div>
        <div className='projects__description'>
          <div className='projects__img'
            style={{
              background:`url(${props.img}) 
              no-repeat 
              center/360px`
            }} 
          />
          <p className='projects__text'>
            {props.parragraph}
          </p>  
        </div>
      </div>
    </div>
    )
  })

export default Card;