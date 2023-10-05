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
    _count: { Replies: number };
    User: MinimalUserType;
    Replies: ReplyType[];
    createdAt: string;
    updatedAt: string;
  };

  type ReplyType = {
    id: string;
    content: string;
    userId: string;
    postId?: string;
    replyId: string;
    User: MinimalUserType;
    Replies: ReplyType[] | [{ _count: { Replies: number } }];
    createdAt: string;
    updatedAt: string;
  };

  type MinimalCommunityType = {
    id: string;
    title: string;
    ownerId?: string;
    description: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    _count: { Members: number };
  };

  type CommunityType = {
    id: string;
    title: string;
    ownerId: string;
    description: string;
    tags: string[];
    Owner: MinimalUserType;
    Members: MinimalUserType[];
    createdAt: string;
    updatedAt: string;
  };
}
