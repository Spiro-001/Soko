export {};

declare global {
  type UserType = {
    id: string;
    username: string;
    email?: string;
    OwnedCommunities: MinimalCommunityType[];
    JoinedCommunities: { Community: MinimalCommunityType }[];
    createdAt: string;
    updatedAt: string;
  };

  type MinimalUserType = {
    id: string;
    username: string;
    email?: string;
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
    _count: { Comments: number };
    createdAt: string;
    updatedAt: string;
  };

  type CommentLikeType = {
    id: string;
    userId: string;
    commentId: string;
  };

  type CommentType = {
    id: string;
    content: string;
    postId: string;
    _count: { Replies: number };
    User: MinimalUserType;
    Replies: ReplyType[];
    CommentLike: CommentLikeType[];
    createdAt: string;
    updatedAt: string;
  };

  type ReplyType = {
    id: string;
    content: string;
    postId: string;
    replyId: string;
    User: MinimalUserType;
    Replies: ReplyType[] | [{ _count: { Replies: number } }];
    CommentLike: CommentLikeType[];
    createdAt: string;
    updatedAt: string;
  };

  type NewCommentType = {
    content: string;
    userId: string;
    postId: string;
  };

  type NewReplyType = {
    content: string;
    userId: string;
    postId: string;
    replyToId: string;
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
