import { useRouter } from "next/router";
import useItem from "@hooks/useItem";
import DescriptionItem from "@components/DescriptionItem";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  const { item } = useItem(productId);
  return (
    <>
      <section>
        <div>
          <div>
            <img src={item.image} alt={item.name}></img>
          </div>
          <div className="content">
            <h1>{item.name}</h1>
            <div className="description">
              <p>{item.price}</p>
              <div>{item.sku}</div>
            </div>
          </div>
        </div>
      </section>
      {Object.entries(item).length === 0 ? null : (
        <DescriptionItem item={item} />
      )}
    </>
  );
};
export default ProductItem;
