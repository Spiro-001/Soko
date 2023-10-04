export {};

declare global {
  type PostType = {
    id: string;
    tags: string[];
    content: string;
    User: { username: string; id: string };
    createdAt: string;
    updatedAt: string;
  };
}
