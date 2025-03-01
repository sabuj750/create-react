import { useState } from "react";
import LineItem from "./LineItem";
const AnimalList = ({ Animals }) => {

  let [boughtPet, setBoughtPet] = useState([]);
  const buyButtonHandler = (pet , event) => {
    let newPet = [...boughtPet , pet];
    setBoughtPet(newPet);
  }
  return (
    <ul className="list-group">
      {Animals.map((pet) => (
        <LineItem pet={pet} 
        bought = {boughtPet.includes(pet)}
        buyButtonHandler = {(event) => {
          buyButtonHandler(pet , event)
        }}></LineItem>
      ))}
    </ul>
  );
};
export default AnimalList;
