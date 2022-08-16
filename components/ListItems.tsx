import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { CartItemType } from "@store/cart";


type ListItemsProps = {
  items: CartItemType[];
};

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      {items.map(({ id, name, price, image }) => (
        <Grid item xs={2} sm={4} md={5} key={id}>
          <CardItem id={id} name={name} price={price} image={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListItems;
