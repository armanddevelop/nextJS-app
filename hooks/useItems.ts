import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

export const useItems = () => {
  const [items, setItems] = useState<TProduct[]>([]);
  useEffect(() => {
    fetch("/api/v1/avo")
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setItems(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return { items };
};
