import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const getAvoById = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  try {
    const db = new DB();
    const {
      query: { avoId },
    } = request;
    const data = await db.getById(avoId as string);
    response.status(200).json(data);
  } catch (error) {
    console.error("[ErrorgetAvoById]: ", error);
  }
};

export default getAvoById;
