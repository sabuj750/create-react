import css from "./buttons.module.css";
const Buttons = ({onButtonClick}) => {
  const listButtons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
return (
<div className={css.buttons}>
  {listButtons.map((button) => (
    <button className={css.buttonStyle} onClick={() => {onButtonClick(button)}}>{button}</button>
  ))}
</div>
);
}
export default Buttons;