import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import usePost from "@/hooks/usePost";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const hideModal = () => setShowModal(false);
  const { posts } = usePost();
  return (
    <div>
      <div className="flex gap-4 justify-between items-center flex-wrap">
        <h1 className="font-bold text-xl">Welcome to Home Page</h1>
        <Button
          shape="rounded-full"
          size="small"
          onClick={() => setShowModal(true)}
        >
          Add post
        </Button>
      </div>
      <ul className="grid gap-4 py-4">
        {posts?.map((post) => (
          <li>
            <Card title={post.title} content={post.content} />
          </li>
        ))}
      </ul>
      {showModal && <PostModal hideModal={hideModal} />}
    </div>
  );
};

export default Home;
