import { Post } from "@/types/Post";

type AddAction = {
    type: 'add';
    payload: {
        title: string;
        body: string;
    };
}

type removeAction = {
    type: 'remove';
    payload: {
        id: number;
    };
}

type PostActions = AddAction | removeAction;

let count = 0;

export function postReducer(posts: Post[], action: PostActions) {
    switch (action.type) {
        case 'add':
            return [...posts, {
                id: count++,
                title: action.payload.title,
                body: action.payload.body
            }];
        case 'remove':
            return posts.filter(p => p.id !== action.payload.id);
        default:
            return posts;
    }
}