import { usePosts } from "@/contexts/PostContext";

export function Footer() {
    const postCtx = usePosts();

    return (
        <footer>
            Total of posts: {postCtx?.posts.length}
        </footer>
    );
}