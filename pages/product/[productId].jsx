import { useRouter } from "next/router";
import useItem from "../../hooks/useItem";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  const {
    item: { name, sku, price },
  } = useItem(productId);
  return (
    <div>
      <h1>{name}</h1>
      <p>{sku}</p>
      <p>{price}</p>
    </div>
  );
};
export default ProductItem;
