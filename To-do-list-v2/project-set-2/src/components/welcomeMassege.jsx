import itemContext from '../store/itemContext';
import {useContext} from 'react';
import style from './welcomeMassege.module.css';

const WelcomeMassege = () => {
  const  {items} = useContext(itemContext);
  const message = items;
  return message.length === 0 && <p className={style.paraStyle}>Enter your today's wark list.</p>

}
export default WelcomeMassege;