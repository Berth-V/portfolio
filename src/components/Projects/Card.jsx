import '../Projects/Projects.css'
import {NavLink} from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {TbWorldWww} from 'react-icons/tb'

function Card(props) {

  const parragraphs =[
    'This WebSite promotted services from a company called Villas Power Sweeping, that provides sweep cleaning services in San Diego county, in California.',
    'This WebSite promotted Yoneme, a folclorick dance group from Tijuana city, in Mexico.',
    'This is my first noob project called KateShop, a Cake Shop for a non-launched business, created with pure Javascript.'
  ]

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
            {parragraphs[props.index]}
          </p>  
        </div>
      </div>
    </div>
  )
}

export default Card
