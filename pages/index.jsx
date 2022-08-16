import useItems from "@hooks/useItems";
import Loading from "@components/Loading";
import ListItems from "@components/ListItems";
import { useEffect } from "react";

const Home = () => {
  const { items } = useItems();
  const loadComponent = () => {
    if (items.length === 0) return <Loading />;
    return (
      <div>
        <h1>Avocados</h1>
        <ListItems items={items} />
      </div>
    );
  };
  return <>{loadComponent()}</>;
};

export default Home;
