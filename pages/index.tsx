import Link from "next/link";
import fetch from "isomorphic-unfetch";
//import { useItems } from "@hooks/useItems";
import Loading from "@components/Loading";
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
      <>
        <section className="buy-avo">
          <h1>Avocados</h1>
          <Link href="/BuyAvo">
            <a>
              <h3>Should I buy an Avo Today?</h3>
            </a>
          </Link>
        </section>
        <section className="avo-list">
          <ListItems items={productList} />
        </section>
        <style jsx>{`
          .buy-avo {
            margin-bottom: 20px;
            text-align: center;
          }
          .avo-list {
            margin-left: 10%;
          }
          @media (max-width: 760px) {
            .avo-list {
              margin-left: 3%;
            }
          }
        `}</style>
      </>
    );
  };
  return <>{loadComponent()}</>;
};

export default Home;
