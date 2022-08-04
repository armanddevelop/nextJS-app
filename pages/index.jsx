import useItems from "@hooks/useItems";
import ListItems from "@components/ListItems";
const Home = () => {
  const { items } = useItems();
  return (
    <div>
      <h1>Avocados</h1>
      <ul>
        {items.map(({ name, id }) => (
          <ListItems name={name} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
