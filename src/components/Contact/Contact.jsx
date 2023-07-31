import '../Contact/Contact.css';
import { useContext } from 'react';
import {Context} from '../../context/Context';
import {useInView} from 'react-intersection-observer';

function Contact() {
  const {isOnContactPage} = useContext(Context);
  const {ref, inView, entry} = useInView();
  const isInView = ()=>{
    inView
      ?  isOnContactPage(true)
      :  isOnContactPage(false)  
  }
  return (
    <div className='contact' ref={ref}>
      {console.log(inView)} 
      {isInView} 
    </div>
  )   
}    

export default Contact;