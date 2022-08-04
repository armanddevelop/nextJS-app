import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    window
      .fetch("/api/v1/avo")
      .then((response) => response.json())
      .then(({ data }) => {
        setItems(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return { items };
};

export default useItems;
