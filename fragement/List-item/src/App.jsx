// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimalList from "./components/AnimalList";
import ErrorMassage from "./components/ErrorMassage";
import "./App.css";
function App() {
  // let pets = [];
  let pets = ["Dog", "Cat", "Horse", "Elephent", "Jiraf",'Snake', ' kinkong'];
  return (
    <>
      <h1>My Pets</h1>
      <ErrorMassage error = {pets}></ErrorMassage>
      <AnimalList Animals = {pets}></AnimalList>
    </>
  );
}

export default App;
