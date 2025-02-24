import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import DeleteItem1 from "./components/DeleteItem1";
import DeleteItem2 from "./components/DeleteItem2";
// import './style.css';
function App() {
  return (
    <center class="todo-center">
      <AppName />
      <AddTodo />
      <div className="Item-container">
        <DeleteItem1 />
        <DeleteItem2 />
      </div>
    </center>
  );
}

export default App;
