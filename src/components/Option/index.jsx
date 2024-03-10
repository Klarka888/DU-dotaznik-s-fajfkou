import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onClickType }) => { 
  return (
    <div className="option" onClick={() => onClickType(type, text)}> 
      <Icon type={type}   />
      <div >{text}</div>
    </div>
  );
};
