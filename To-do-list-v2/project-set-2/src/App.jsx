import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import './style.css';
function App() {
  const ItemsList = [{
    name : "Buy Milk",
    dueDate : "12/12/2021"
  },
  {
    name : "Go to the gym",
    dueDate : "03/08/2021"
  },{
    name : "Buy a new phone",
    dueDate : "12/12/2021"
  }];

  return (
    <center class="todo-center">
      <AppName />
      <AddTodo />
      <Items items = {ItemsList}/>
    </center>
  );
}

export default App;
