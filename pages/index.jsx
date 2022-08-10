import useItems from "@hooks/useItems";
import ListItems from "@components/ListItems";

const Home = () => {
  const { items } = useItems();
  return (
    <div>
      <h1>Avocados</h1>
      <ListItems items={items} />
    </div>
  );
};

export default Home;
