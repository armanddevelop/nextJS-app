import { useAnswer } from "@hooks/useAnswer";
import { Button } from "@mui/material";

const BuyAvo = () => {
  const { answer, setSendReq } = useAnswer();

  return (
    <>
      <h1>{answer}</h1>
      <Button variant="outlined" onClick={() => setSendReq(true)}>
        Intentar de nuevo
      </Button>
    </>
  );
};

export default BuyAvo;
