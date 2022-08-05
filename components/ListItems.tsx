import { CartItemType } from "@store/cart";
type ListItemsProps = {
  items: CartItemType[];
};

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default ListItems;
