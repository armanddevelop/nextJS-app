import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/v1/avo")
      .then((response) => response.json())
      .then(({ data }) => {
        setItems(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return { items };
};

export default useItems;
