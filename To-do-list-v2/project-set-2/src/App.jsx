import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import {use, useState} from 'react';
import WelcomeMassege from "./components/welcomeMassege";
import itemContext from './store/itemContext';
import './style.css';
function App() {
  const [itemList , setitemList] = useState([]);

  const addNewItem = (inputValue , dueDate) => {
    setitemList((currentValue) => [...currentValue , {name : inputValue , dueDate : dueDate}]);
  }

  const deleteItems = (item) => {
    let newItems = itemList.filter((i) => i.name !== item);
    setitemList(newItems);
  }
  

  return (
    <itemContext.Provider value = {{
      items : itemList,
      addNewItem : addNewItem,
      deleteItems : deleteItems
    }}>
    <center class="todo-center">
      <AppName />
      <AddTodo/>
      <WelcomeMassege></WelcomeMassege>
      <Items/>
    </center>
    </itemContext.Provider>
  );
}

export default App;
