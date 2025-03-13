import DeleteItem from "./DeleteItem";
import itemContext from "../store/itemContext";
import { useContext } from "react";
const Items = () => {
  // const onButtonObj = useContext(itemContext);
  // const onButtonDelete = onButtonObj.deleteItems;
  // const itemsodj = useContext(itemContext);
  // const items = itemsodj.items;
  const { items, deleteItems } = useContext(itemContext);
  return (
    <div className="Item-container">
      {items.map((item) => (
        <DeleteItem key={item.name} item={item.name} ItemDate={item.dueDate} onButtonDelete={deleteItems}/>
      ))}
    </div>
  );
};
export default Items;
