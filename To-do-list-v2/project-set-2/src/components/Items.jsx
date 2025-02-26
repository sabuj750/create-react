import DeleteItem from "./DeleteItem";
const Items = ({ items }) => {
  return (
    <div className="Item-container">
      {items.map((item) => (
        <DeleteItem item={item.name} ItemDate={item.dueDate} />
      ))}
    </div>
  );
};
export default Items;
