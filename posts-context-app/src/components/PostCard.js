import { useContext,useState } from "react";
import { PostContext } from "../context/PostContext";
const PostCard = ({post}) => {
    const {updatePost,deletePost} = useContext(PostContext);
    const [isEditing,setIsEditing] = useState(false);
    const [title,setTitle] = useState(post.title);
    const [body,setBody] = useState(post.body);

    const handleSave = () => {
        updatePost(post.id,{...post,title,body});
        setIsEditing(false);
    };
    return (
        <div className="card">
            {isEditing ? (
                <div>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h3>{post.title}</h3>
                    <p>{body}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};
export default PostCard;