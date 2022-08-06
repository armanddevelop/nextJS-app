import useItems from "@hooks/useItems";
import ListItems from "@components/ListItems";
const Home = () => {
  const { items } = useItems();
  return (
    <div>
      <h1>Avocados</h1>
      <div>
        <ListItems items={items} />
      </div>
    </div>
  );
};

export default Home;
