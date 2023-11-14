import './PrevButton.css';
import {NavLink} from 'react-router-dom';

function PrevButton(props) {
  return (
    <NavLink className='prevbutton' to={props.to}>
      &lt;
    </NavLink>
  );
}

export default PrevButton;
