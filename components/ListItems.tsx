import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { CartItemType } from "@store/cart";

type ListItemsProps = {
  items: CartItemType[];
};

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        {items.map(({ id, name, price, image }) => (
          <CardItem key={id} id={id} name={name} price={price} image={image} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ListItems;
