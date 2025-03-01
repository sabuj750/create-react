import css from "./AddTodo.module.css";
import { useState } from "react";


function AddTodo({onButtonClick}) {

  let [inputValue , setInputValue] = useState('');
  let [dueDate , setDueDate] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
    
  }
  
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
    
  }

  const handleButtonClick = () => {
    onButtonClick(inputValue , dueDate);
    setInputValue('');
    setDueDate('');
  }

  return (
    <div class="container text-center">
      <div class="row my-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo content"
            className={css['input-style']} value={inputValue}
            onChange = {handleInputChange} 
          />
        </div>
        <div class="col-4">
          <input type="date" className={css['input-style']} value={dueDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success my-button" onClick={handleButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
