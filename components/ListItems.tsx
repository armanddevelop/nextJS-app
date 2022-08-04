interface propsListItems {
  name: string;
  id: string;
}

const ListItems = ({ name, id }: propsListItems) => {
  return (
    <li key={id}>
      <span>{name}</span>
    </li>
  );
};

export default ListItems;
