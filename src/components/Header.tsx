import { usePosts } from "@/contexts/PostContext";
import { useState } from "react";

export function Header() {
    const postCtx = usePosts();

    const [ titleInput, setTitleInput ] = useState('');
    const [ bodyInput, setBodyInput ] = useState('');

    function handleAddButton() {
        if (titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput);
            setTitleInput('');
            setBodyInput('');
        }
    }

    return (
        <header className="border my-2 rounded-sm max-w-screen-md">
            <h1 className="text-2xl p-3">Posts</h1>

            <div className="flex flex-col gap-3 p-3 rounded-sm">
                <input
                    type="text"
                    placeholder="Title"
                    className="text-xl outline-none p-2 text-black rounded-sm"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <textarea
                    className="h-24 outline-none p-2 text-black text-xl rounded-sm" placeholder="Text area"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)}
                ></textarea>

                <button
                    onClick={handleAddButton}
                    className="w-full bg-blue-500 p-2 rounded-sm hover:bg-blue-600 active:opacity-90"
                >Add</button>
            </div>
        </header>
    );
}