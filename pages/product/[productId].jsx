import { useRouter } from "next/router";
import { TextField, Button } from "@mui/material";
import useItem from "@hooks/useItem";
import DescriptionItem from "@components/DescriptionItem";
import stylesProductId from "./productId.module.css";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  const { item } = useItem(productId);
  return (
    <>
      <section className="photo-section">
        <div className={stylesProductId.item}>
          <div className={stylesProductId.image}>
            <img src={item.image} alt={item.name}></img>
          </div>
          <div className={stylesProductId.contentDescription}>
            <h1>{item.name}</h1>
            <div>
              <p>{item.price}</p>
              <div className={stylesProductId.uiLabel}> SKU: {item.sku}</div>
            </div>
            <div className={stylesProductId.extra}>
              <TextField label="Qauntity" variant="outlined" type="number" />
              <Button
                sx={{ display: "flex", marginTop: "10px" }}
                variant="outlined"
                color="success"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        {Object.entries(item).length === 0 ? null : (
          <DescriptionItem item={item} />
        )}
      </section>
      <style jsx>{`
        .photo-section {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};
export default ProductItem;
