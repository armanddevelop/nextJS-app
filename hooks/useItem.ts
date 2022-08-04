import { useState, useEffect } from "react";

const useItem = (productId = "") => {
  const [item, setItem] = useState({});

  useEffect(() => {
    window
      .fetch(`/api/v1/product/${productId}`)
      .then((response) => response.json())
      .then((response) => setItem(response))
      .catch((e) => console.error(e));
  }, [productId]);

  return { item };
};

export default useItem;
