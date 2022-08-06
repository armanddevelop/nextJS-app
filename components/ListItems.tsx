import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CartItemType } from "@store/cart";

type ListItemsProps = {
  items: CartItemType[];
};

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <div>
      {items.map(({ id, name, price, image }) => (
        <Card key={id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="200" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ListItems;
