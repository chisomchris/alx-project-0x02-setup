import { CardProps } from "@/interfaces";
import { createContext, ReactNode, useState } from "react";

export const PostsContext = createContext<{
  posts: CardProps[];
  createPost?: (newPost: CardProps) => void;
}>({
  posts: [],
});

export const PostsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "test140",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus unde libero praesentium maiores, odio dignissimos animi laboriosam eum exercitationem quo dolorum commodi culpa aliquid magnam voluptatem, totam soluta iure qui.",
    },
    {
      title: "test 8",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus unde libero praesentium maiores, odio dignissimos animi laboriosam eum exercitationem quo dolorum commodi culpa aliquid magnam voluptatem, totam soluta iure qui.",
    },
  ]);

  const createPost = (newPost: CardProps) => {
    const newList = [...posts, newPost];
    setPosts(newList);
  };

  return (
    <PostsContext.Provider value={{ posts, createPost }}>
      {children}
    </PostsContext.Provider>
  );
};
