import './NextButton.css';
import {NavLink} from 'react-router-dom';

function NextButton(props) {
  return (
    <NavLink className='nextbutton' to={props.to}>
      &gt;
    </NavLink>
  );
}

export default NextButton;
