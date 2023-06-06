import '../Projects/Projects.css';
import Card from './Card';
import villas from '../../assets/villas.jpg';
import yoneme from '../../assets/yoneme.jpg';
import kateshop from '../../assets/kateshop.jpg';

function Projects() {

  return (
    <div className='projects'>
      <div className='projects__container'>
        <h1 className='projects__h1'>Projects</h1>
          <div className='projects__box'>
            <Card
              tittle='Villas Power Sweeping'
              name={'villas'}
              img={villas}
              index={0}
            />
            <Card
              tittle='Yoneme'
              name={'yoneme'}
              img={yoneme}
              index={1}
            />
            <Card
              tittle='KateShop'
              name={'kateshop'}
              img={kateshop}
              index={2}
            />
          </div>
      </div>
    </div>
  )
}

export default Projects;