import PostCard from "@/components/common/PostCard";
import usePost from "@/hooks/usePost";
import { PostProps } from "@/interfaces";
import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    fetchData<PostProps[]>("https://jsonplaceholder.typicode.com/posts").then(
      (data) => setPosts(data)
    );
  }, []);
  return (
    <>
      <h1 className="font-bold text-xl">Posts Page</h1>
      <ul className="grid gap-4 py-4">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard
              title={post.title}
              content={post.content || post.body}
              userId={post.userId || "Chisom"}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
