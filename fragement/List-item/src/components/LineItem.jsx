import css from "./LineItem.module.css";


const LineItem = ({ pet }) => {
  return <li className={css['my-item']}><span className={css['animal-style']}>{pet}</span></li>;
};
export default LineItem;
