import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

type CardItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const CardItem = ({ id, name, price, image }: CardItemProps) => {
  return (
    <Link href={`/product/${id}`}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <Image src={image} width="200" height="200" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardItem;
