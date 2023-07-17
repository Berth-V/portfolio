import './Home.css'
import { motion } from 'framer-motion'

function Logosvg() {
    //Framer Motion Variants//
    const circleAnimation={
        start:{pathLength:0},
        onStay:{
          pathLength:1,
          transition:{delay:1}
        },
        leave:{pathLength:0}
      }
    
      const reactIconVariant={
        start:{scale:0},
        onStay:{
          scale:1,
          transition:{
            delay:1.3,
            duration:0.2
          }
        },
        leave:{scale:0}
      }
    
      const letterA={
        start:{y:50,opacity:0},
        onStay:{y:0, opacity:1,
        transition:{delay:1.5}
        },
        leave:{opacity:0}
      }
    
      const letterV={
        start:{y:-50,opacity:0},
        onStay:{y:0, opacity:1,
        transition:{delay:1.5}
        },
        leave:{opacity:0}
      }
  return (
    <svg className='home__logo' 
    width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Portfolio official logo ">
      <g id="Reacticon">
      <g id="Vector2">
      <g id="React group">
      <motion.path id="Vector_4" d="M151.5 80.9674C167.084 80.9674 179.717 76.281 179.717 70.5C179.717 64.719 167.084 60.0326 151.5 60.0326C135.916 60.0326 123.283 64.719 123.283 70.5C123.283 76.281 135.916 80.9674 151.5 80.9674Z" stroke="#D6D6D6"
        variants={reactIconVariant}
        initial='start'
        animate='onStay'
        exit='leave'
      />
      <motion.path id="Vector_2_2" d="M142.17 75.7337C149.962 88.846 160.456 97.1323 165.609 94.2418C170.762 91.3513 168.623 78.3785 160.83 65.2663C153.038 52.154 142.544 43.8677 137.391 46.7582C132.238 49.6487 134.378 62.6215 142.17 75.7337Z" stroke="#D6D6D6"
        variants={reactIconVariant}
        initial='start'
        animate='onStay'
        exit='leave'
      />
      <motion.path id="Vector_3_2" d="M142.17 65.2663C134.378 78.3785 132.238 91.3513 137.391 94.2418C142.544 97.1323 153.038 88.8459 160.83 75.7337C168.623 62.6215 170.762 49.6487 165.609 46.7582C160.456 43.8677 149.962 52.154 142.17 65.2663Z" stroke="#D6D6D6"
        variants={reactIconVariant}
        initial='start'
        animate='onStay'
        exit='leave'
      />
      <motion.path id="Vector_4_2" d="M151.5 75.6091C154.404 75.6091 156.759 73.3217 156.759 70.5C156.759 67.6783 154.404 65.3909 151.5 65.3909C148.596 65.3909 146.241 67.6783 146.241 70.5C146.241 73.3217 148.596 75.6091 151.5 75.6091Z" fill="#D6D6D6"
        variants={reactIconVariant}
        initial='start'
        animate='onStay'
        exit='leave'
      />
      </g>
      </g>
      </g>
      <g id="Text">
      <g id="A">
      <motion.path id="Vector4" d="M91.091 227.091H88L121.273 134H125.273L158.546 227.091H155.455L123.455 137.636H123.091L91.091 227.091ZM101.637 192.727H144.909V195.636H101.637V192.727Z" fill="#D6D6D6"
        variants={letterA}
        initial='start'
        animate='onStay'
        exit='leave'
      />
      </g>
      <g id="V">
      <motion.path id="Vector3" d="M147.41 134L169.91 204.727H170.773L193.319 134H215.137L183.046 227.091H157.682L125.546 134H147.41Z" fill="#FF5D1C"
        variants={letterV}
        initial={'start'}
        animate={'onStay'}
        exit={'leave'}
      />
      </g>
      </g>
      <g id="Circle">
      <motion.path id="Vector1" d="M152 303C235.395 303 303 235.395 303 152C303 68.605 235.395 1 152 1C68.605 1 1 68.605 1 152C1 235.395 68.605 303 152 303Z" stroke="#FF5D1C" stroke-width="2"
        variants={circleAnimation}
        initial='start'
        animate='onStay'
        exit='leave'
      />
      </g>
      </g>
    </svg>
  )
}

export default Logosvg;
