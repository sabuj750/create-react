import Display from "./components/display";
import Buttons from "./components/buttons";
import { useState } from "react";
import css from "./App.module.css";
function App() {
  const [calVal , setCalVal] = useState("");
  const onButtonClick = (button) => {
    if(button === 'C'){
      setCalVal("");
  }else if(button === '='){
    let result = eval(calVal);
    setCalVal(result);
  }else{
    setCalVal(calVal + button);
  }
}
  return (
    <div className={css.container}>
      <Display displayValue = {calVal}/>
      <Buttons onButtonClick = {onButtonClick}/>
    </div>
  );
}
export default App;
