import { useEffect } from "react";
import { useState } from "react";

export const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  useEffect(() => {
    console.log({ items });
  }, [items]);

  return items;
};
