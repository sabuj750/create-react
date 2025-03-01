import css from "./input.module.css";

const Input = ({handleKeyDown}) => {
  return (
    <input type="text" placeholder="Enter animal name here" className={css.inputStyle} onKeyDown={handleKeyDown} />
  );
}
export default Input;