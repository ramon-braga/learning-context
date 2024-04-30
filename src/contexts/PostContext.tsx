import { Post } from "@/types/Post";
import { ReactNode, createContext, useState } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    deletePost: (id: number) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

let id_number = 0;

export function PostProvider({ children }: { children: ReactNode }) {

    const [ posts, setPosts ] = useState<Post[]>([]);

    function addPost(title: string, body: string) {
        setPosts([...posts, { id: id_number++, title, body }]);
    }

    function deletePost(id: number) {
        setPosts(posts.filter(item => {
            if (item.id !== id) {
                return item;
            }
        }))
    }

    return (
        <PostContext.Provider value={{posts, addPost, deletePost}}>
            {children}
        </PostContext.Provider>
    );
}