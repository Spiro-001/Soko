import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.url) {
      const { searchParams } = new URL(req.url);
      const query = [...searchParams.entries()].map((entry) => [
        entry[0],
        JSON.parse(entry[1]),
      ]);
      console.log(query);
    }
    return new Response(JSON.stringify({}), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 200 });
  }
};
