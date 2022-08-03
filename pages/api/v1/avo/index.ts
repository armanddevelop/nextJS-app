import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";
const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const db = new DB();
    const data = await db.getAll();
    const length = data.length;
    response.status(200).json({ length, data });
  } catch (error) {
    console.error("[ErrorallAvos]: ", error);
  }
};

export default allAvos;
