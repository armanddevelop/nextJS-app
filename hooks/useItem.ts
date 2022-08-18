import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const useItem = (productId = "") => {
  const [item, setItem] = useState<TProduct>({} as TProduct);

  useEffect(() => {
    fetch(`/api/v1/product/${productId}`)
      .then((response) => response.json())
      .then((response: TProduct) => setItem(response))
      .catch((e) => console.error(e));
  }, [productId]);

  return { item };
};

export default useItem;
