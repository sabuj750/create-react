// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimalList from "./components/AnimalList";
import ErrorMassage from "./components/ErrorMassage";
import Container from "./container";
import Input from "./components/input";
import { useState } from "react";
import "./App.css";
function App() { 

  let [pets, setPets] = useState([]);

  const onkeydown = (e) => {
    if (e.key === 'Enter'){
      let value = e.target.value;
      e.target.value = '';
      let newPets = [...pets , value];
      setPets(newPets);
    }
  };
  let showText = 'You are entering the animal name';
  return (
    <>
      <Container>
        <h1>My Pets</h1>
        <Input handleKeyDown={onkeydown}></Input>
        <ErrorMassage error={pets}></ErrorMassage>
        <AnimalList Animals={pets}></AnimalList>
      </Container>
    </>
  );
}

export default App;
