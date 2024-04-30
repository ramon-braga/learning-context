import { postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { ReactNode, createContext, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    deletePost: (id: number) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: ReactNode }) {
    const [ posts, dispatch ] = useReducer(postReducer, []);

    function addPost(title: string, body: string) {
        dispatch({ type: 'add', payload: { title, body } });
    }

    function deletePost(id: number) {
        dispatch({ type: 'remove', payload: {id} });
    }

    return (
        <PostContext.Provider value={{posts, addPost, deletePost}}>
            {children}
        </PostContext.Provider>
    );
}