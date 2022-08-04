interface propsListItems {
  name: string;
  id: string;
}

const ListItems = (props: propsListItems) => {
  const { name, id } = props;
  return (
    <li key={id}>
      <span>{name}</span>
    </li>
  );
};

export default ListItems;
