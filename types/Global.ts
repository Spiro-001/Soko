import { ISODateString } from "next-auth";

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

  type Session = {
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    expires: ISODateString;
  };

  type MinimalUserType = {
    id: string;
    username: string;
    email: string;
    image: string;
  };

  type NewPostType = {
    headline: string;
    tags: string[];
    content: string;
    userId: string;
    communityId: string;
  };

  type PostType = {
    id: string;
    headline: string;
    tags: string[];
    content: string;
    User: MinimalUserType;
    communityId: string;
    Comments: { id: string }[];
    PostLike: { id: string; userId: string; postId: string }[];
    createdAt: string;
    updatedAt: string;
  };

  type PostByIdType = {
    id: string;
    headline: string;
    tags: string[];
    content: string;
    User: MinimalUserType;
    Comments: CommentType[];
    PostLike: { id: string; userId: string; postId: string }[];
    communityId: string;
    _count: { Comments: number };
    createdAt: string;
    updatedAt: string;
  };

  type CommentLikeType = {
    id: string;
    userId: string;
    commentId: string;
  };

  type PostLikeType = {
    id: string;
    userId: string;
    postId: string;
  };

  type CommentType = {
    id: string;
    content: string;
    postId: string;
    _count: { Replies: number; CommentLike: number };
    User: MinimalUserType;
    Replies: ReplyType[];
    CommentLike: CommentLikeType[];
    createdAt: string;
    updatedAt: string;
    communityId: string;
  };

  type ReplyType = {
    id: string;
    content: string;
    postId: string;
    replyId: string;
    User: MinimalUserType;
    Replies: ReplyType[];
    communityId: string;
    CommentLike: CommentLikeType[];
    _count: { Replies: number; CommentLike: number };
    createdAt: string;
    updatedAt: string;
  };

  type NewCommentType = {
    content: string;
    userId: string;
    postId: string;
    communityId: string;
  };

  type NewReplyType = {
    content: string;
    userId: string;
    postId: string;
    replyToId: string;
    communityId: string;
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

  type NewCommunityType = {
    title: string;
    ownerId: string;
    description: string;
    tags: Array<string>;
  };
}
