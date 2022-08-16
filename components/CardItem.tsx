import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

type CardItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const CardItem = ({ id, name, price, image }: CardItemProps) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {price}
          </Typography>
          <CardActions>
            <Link href={`/product/${id}`}>
              <a>Learn More</a>
            </Link>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
