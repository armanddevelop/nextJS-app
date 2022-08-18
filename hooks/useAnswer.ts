import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
export const useAnswer = () => {
  const [answer, setAnswer] = useState("yes");
  const [sendReq, setSendReq] = useState(false);
  useEffect(() => {
    if (sendReq) {
      fetch("/api/v1/buyAvo")
        .then((response) => response.json())
        .then(({ answer }: BuyAvo) => {
          setAnswer(answer);
          setSendReq(false);
        });
    }
  }, [sendReq]);

  return { answer, setSendReq };
};
