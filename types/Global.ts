export {};

declare global {
  type UserType = {
    id: string;
    username: string;
    OwnedCommunities: MinimalCommunityType[];
    JoinedCommunities: { Community: MinimalCommunityType }[];
    createdAt: string;
    updatedAt: string;
  };

  type MinimalUserType = {
    id: string;
    username: string;
  };

  type PostType = {
    id: string;
    tags: string[];
    content: string;
    User: MinimalUserType;
    Comments: { id: string }[];
    createdAt: string;
    updatedAt: string;
  };

  type PostByIdType = {
    id: string;
    tags: string[];
    content: string;
    User: MinimalUserType;
    Comments: CommentType[];
    createdAt: string;
    updatedAt: string;
  };

  type CommentType = {
    id: string;
    content: string;
    userId: string;
    postId?: string;
    User: MinimalUserType;
    createdAt: string;
    updatedAt: string;
  };

  type MinimalCommunityType = {
    id: string;
    title: string;
    ownerId: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    _count: { Members: number };
  };

  type CommunityType = {
    id: string;
    title: string;
    ownerId: string;
    tags: string[];
    Owner: MinimalUserType;
    Members: MinimalUserType[];
    createdAt: string;
    updatedAt: string;
  };
}
