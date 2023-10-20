import { getCommunityById } from "@/prisma/getCommunityById";
import { getPostByCommunity } from "@/prisma/getPostByCommunity";

export const GET = async (
  req: Request,
  { params }: { params: { communityId: string } }
) => {
  try {
    if (req.url) {
      const { searchParams } = new URL(req.url);
      const query = {
        blocked: JSON.parse(searchParams.get("blocked") ?? "[]"),
        skip: JSON.parse(searchParams.get("skip") ?? "0"),
        take: JSON.parse(searchParams.get("take") ?? "10"),
      };

      console.log(query, "communitybyId");

      const communities = await getCommunityById(params.communityId);
      const posts = await getPostByCommunity({
        blocked: query.blocked,
        skip: query.skip,
        take: query.take,
        communityId: params.communityId,
      });

      return new Response(JSON.stringify({ communities, posts }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify("URL Invalid"), { status: 404 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
