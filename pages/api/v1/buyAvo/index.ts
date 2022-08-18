import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const generateAnswer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB();
    const response = await db.getAnswer();
    res.status(200).json(response);
  } catch (error) {
    console.error("[generateAnswerError]:", error);
  }
};
export default generateAnswer;
