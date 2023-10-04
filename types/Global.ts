export {};

declare global {
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
}
