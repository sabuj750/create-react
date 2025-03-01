import css from "./display.module.css";

const Display = ({displayValue}) => {
  return <input type="display" className={css.display} value={displayValue} readOnly/>;
};
export default Display;
