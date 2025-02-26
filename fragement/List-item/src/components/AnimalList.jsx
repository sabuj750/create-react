import LineItem from "./LineItem";
const AnimalList = ({ Animals }) => {
  return (
    <ul className="list-group">
      {Animals.map((pet) => (
        <LineItem pet = {pet}></LineItem>
      ))}
    </ul>
  );
};
export default AnimalList;
