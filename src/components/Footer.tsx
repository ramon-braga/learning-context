import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export function Footer() {
    const postCtx = useContext(PostContext);

    return (
        <footer>
            Total of posts: {postCtx?.posts.length}
        </footer>
    );
}