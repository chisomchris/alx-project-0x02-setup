import { PostsContext } from "@/contexts/Posts";
import { useContext } from "react";

const usePost = () => useContext(PostsContext);

export default usePost;
