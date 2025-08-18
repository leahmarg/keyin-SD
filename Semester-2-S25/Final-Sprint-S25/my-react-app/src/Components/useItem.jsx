import { useEffect } from "react";
import { useState } from "react";

export const useItem = (itemId) => {
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching item:", err));
  }, []);

  useEffect(() => {
    console.log({ item });
  }, [item]);

  return item;
};
