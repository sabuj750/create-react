import css from "./LineItem.module.css";

const LineItem = ({ pet ,bought, buyButtonHandler}) => {

  return (
    <li  className={`${css["my-item"]} list-group-item ${bought && 'active'}`}>
      <span className={css["animal-style"]}>{pet}</span>
      <button className={`${css.button} btn btn-success`}
      onClick={buyButtonHandler}> Buy</button>
    </li>
  );
};
export default LineItem;
