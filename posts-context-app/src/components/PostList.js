import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";
function PostList() {
  const { posts } = useContext(PostContext);
  return (
    <div>
        {posts.map(post=>(
            <PostCard key={post.id} post={post} />
        ))}
    </div>
  );
}

export default PostList;