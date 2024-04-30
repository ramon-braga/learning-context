import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export function PostList() {
    const postCtx = useContext(PostContext);

    function handleDeletePost(id: number) {
        postCtx?.deletePost(id);
    }

    return (
        <div>
            {postCtx?.posts.map((item) => 
                <div key={item.id} className="flex p-3 border-b border-gray-500">
                    <div className="flex-1">
                        <div className="text-xl font-bold mb-2">{item.title}</div>
                        <div className="text-sm">{item.body}</div>
                    </div>
                    <button
                    onClick={() => handleDeletePost(item.id)}
                        className="border px-3 py-1 rounded-sm hover:opacity-90 active:opacity-90"
                    >Delete Post</button>
                </div>
            )}
        </div>
    );
}