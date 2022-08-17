//import { useItems } from "@hooks/useItems";
import Loading from "@components/Loading";
import fetch from "isomorphic-unfetch";
import ListItems from "@components/ListItems";

export const getServerSideProps = async () => {
  try {
    const urlBase = "http://localhost:3000/api/v1/avo";
    const response = await fetch(urlBase);
    const { data: productList }: TAPIAvoResponse = await response.json();
    return {
      props: {
        productList,
      },
    };
  } catch (error) {
    console.error("[getServerSidePropsError]: ", error);
  }
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  const loadComponent = () => {
    if (productList.length === 0) return <Loading />;
    return (
      <div>
        <h1>Avocados</h1>
        <ListItems items={productList} />
      </div>
    );
  };
  return <>{loadComponent()}</>;
};

export default Home;
