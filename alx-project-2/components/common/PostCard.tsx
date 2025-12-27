import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-2 rounded max-w-3xl">
      <h2 className="font-medium capitalize">{title}</h2>
      <p className="py-4">{content}</p>
      <p className="italic">By {userId}</p>
    </div>
  );
};

export default PostCard;
