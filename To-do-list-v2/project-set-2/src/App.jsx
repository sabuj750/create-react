import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import {useState} from 'react';
import WelcomeMassege from "./components/welcomeMassege";
import './style.css';
function App() {
  const [itemList , setitemList] = useState([]);

  const addItem = (inputValue , dueDate) => {
    let newItem = {
      name : inputValue,
      dueDate : dueDate
    }
    setitemList([...itemList , newItem]);
  }

  const deleteItems = (item) => {
    let newItems = itemList.filter((i) => i.name !== item);
    setitemList(newItems);
  }

  return (
    <center class="todo-center">
      <AppName />
      <AddTodo onButtonClick ={addItem}/>
      {itemList.length === 0 && <WelcomeMassege></WelcomeMassege>}
      <Items onButtonDelete={deleteItems} items = {itemList}/>
    </center>
  );
}

export default App;
