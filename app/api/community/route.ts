import { createCommunity } from "@/prisma/createCommunity";
import { createUserCommunity } from "@/prisma/createUserCommunity";
import { getCommunity } from "@/prisma/getCommunity";
import { NextApiResponse } from "next";

export const GET = async (req: Request, res: NextApiResponse) => {
  try {
    if (req.url) {
      const { searchParams } = new URL(req.url);

      const query = {
        interest: JSON.parse(searchParams.get("interest") ?? "[]"),
        blocked: JSON.parse(searchParams.get("blocked") ?? "[]"),
        skip: JSON.parse(searchParams.get("skip") ?? "0"),
        take: JSON.parse(searchParams.get("take") ?? "10"),
        userId: searchParams.get("userId") ?? "",
      };

      console.log(query, "community");

      const communities = await getCommunity(query);
      return new Response(JSON.stringify(communities), { status: 200 });
    }
    return new Response(JSON.stringify("URL Invalid"), { status: 404 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const communityContent = await req.json();
    const community = await createCommunity(communityContent);
    if (!community) {
      return new Response(
        JSON.stringify("There was an error creating a new community"),
        { status: 500 }
      );
    }
    const userCommunity = await createUserCommunity({
      userId: community.ownerId,
      communityId: community.id,
    });
    if (!userCommunity) {
      return new Response(
        JSON.stringify("There was an error linking owner to community"),
        { status: 500 }
      );
    }
    return new Response(JSON.stringify(community), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
