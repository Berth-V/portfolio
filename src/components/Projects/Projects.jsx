import '../Projects/Projects.css';
import Card from './Card';
import villas from '../../assets/villas.jpg'
import yoneme from '../../assets/yoneme_card.jpg'
import kateshop from '../../assets/kateshop.jpg'

function Projects() {

  return (
    <div className='projects'>
      <div className='projects__container'>
        <h1 className='projects__h1'>Projects</h1>
          <div className='projects__box'>
            <Card 
              tittle='Villas Power Sweeping'  
              img={villas}
            />
            <Card 
              tittle='Yoneme'
              img={yoneme}
            />
            <Card
              tittle='KateShop' 
              img={kateshop}
            />
          </div>
      </div>
    </div>
  )
}

export default Projects;