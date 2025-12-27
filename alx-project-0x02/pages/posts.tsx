import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { fetchData } from "@/utils/api";
import { GetStaticProps, InferGetServerSidePropsType } from "next";

const Posts: React.FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <>
      <h1 className="font-bold text-xl">Posts Page</h1>
      <ul className="grid gap-4 py-4">
        {posts?.map((post) => (
          <li key={post.id}>
            <PostCard
              title={post.title}
              content={post.body}
              userId={post.userId || "Chisom"}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;

export const getStaticProps = (async () => {
  const posts = await fetchData<PostProps[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return { props: { posts } };
}) satisfies GetStaticProps<{ posts: PostProps[] }>;
