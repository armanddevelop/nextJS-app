import { Button } from "@mui/material";
import Link from "next/link";
import { useAnswer } from "@hooks/useAnswer";

const BuyAvo = () => {
  const { answer, setSendReq } = useAnswer();

  const titleAnswer = () => {
    const styles = {
      color: answer === "no" ? "gray" : "green",
    };
    return (
      <div className="buy-avo-container">
        <h1 style={styles}>{answer.toUpperCase()}</h1>
        <Button
          sx={{ margin: "10px" }}
          variant="outlined"
          color="success"
          onClick={() => setSendReq(true)}
        >
          Intentar de nuevo
        </Button>
        <Link href="/">
          <Button sx={{ margin: "10px" }} variant="outlined" color="info">
            Regresar al Inicio
          </Button>
        </Link>
        <style jsx>
          {`
            .buy-avo-container {
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  };

  return <>{titleAnswer()}</>;
};

export default BuyAvo;
