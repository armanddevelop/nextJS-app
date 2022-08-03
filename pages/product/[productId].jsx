import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return <h1>Esta es una pagina dinamica {productId}</h1>;
};
export default ProductItem;
