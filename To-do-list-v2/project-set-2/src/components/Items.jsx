import DeleteItem from "./DeleteItem";
const Items = ({ items , onButtonDelete}) => {
  return (
    <div className="Item-container">
      {items.map((item) => (
        <DeleteItem item={item.name} ItemDate={item.dueDate} onButtonDelete={onButtonDelete}/>
      ))}
    </div>
  );
};
export default Items;
