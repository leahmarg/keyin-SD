import Item from "./Item/item";
import "./ItemList.css";

export function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
}
