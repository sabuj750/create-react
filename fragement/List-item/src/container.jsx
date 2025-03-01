import css from "./container.module.css";

const container = (props) => {
  return <div className={css.container}>{props.children}</div>
  
}
export default container;