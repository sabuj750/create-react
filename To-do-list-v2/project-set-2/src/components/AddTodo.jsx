import css from "./AddTodo.module.css";
import { MdLibraryAdd } from "react-icons/md";
import itemContext from "../store/itemContext";
import { useContext, useRef } from "react";


function AddTodo() {

  const useOnbuttonClick = useContext(itemContext);
  const onButtonClick = useOnbuttonClick.addNewItem;

  const addItemElement = useRef();
  const dueDateElement = useRef();

  const handleButtonClick = (event) => {
    event.preventDefault();
    let inputValue = addItemElement.current.value;
    let dueDate = dueDateElement.current.value;
    addItemElement.current.value = '';
    dueDateElement.current.value = '';
    onButtonClick(inputValue , dueDate);
  }

  return (
    <form onSubmit={handleButtonClick} class="container text-center">
      <div className="row my-row">
        <div class="col-6">
          <input
            type="text"
            ref={addItemElement}
            placeholder="Enter Todo content"
            className={css['input-style']}  
          />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElement} className={css['input-style']} />
        </div>
        <div class="col-2">
          <button  className="btn btn-success my-button">
          <MdLibraryAdd />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
