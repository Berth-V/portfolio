import '../Contact/Contact.css';
import PrevButton from '../Shared/PrevButton/PrevButton';
import {forwardRef} from 'react';
import {motion} from 'framer-motion';

const Contact = forwardRef((props, ref) => {
  //Framer Motion Variants//
  const retAnimation = {
    start: {pathLength: 0},
    onStay: {
      pathLength: 1,
      transition: {delay: 1.2, duration: 0.5},
    },
    leave: {pathLength: 0},
  };

  return (
    <div className='contact'>
      <h1 className='contact__h1'>Contact</h1>
      <svg
        className='contact__rectangle'
        width='381'
        height='60'
        viewBox='0 0 381 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.rect
          id='Rectangle 1'
          x='1.5'
          y='1.5'
          width='378'
          height='57'
          rx='16.5'
          stroke='#FF5D1C'
          stroke-width='3'
          variants={retAnimation}
          initial='start'
          animate='onStay'
          exit='leave'
        />
      </svg>
      <div className='contact__box' ref={ref}></div>
      <PrevButton to='/projects' />
    </div>
  );
});

export default Contact;
