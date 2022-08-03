import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    window
      .fetch("/api/v1/avo")
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        setItems(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div>
      <h1>Avocados</h1>
      <ul>
        {items.map(({ name, price, sku, id }) => {
          return (
            <li key={id}>
              <span>{name}</span>
              <span>{price}</span>
              <span>{sku}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
