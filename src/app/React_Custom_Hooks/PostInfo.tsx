'use client'

import { usePostProps } from "./usePostProps";
import { useDataSource } from "./useDataSource";
import { useResource} from "./useResource";
import { getPost } from "../services/getPost";

export const PostInfo = ({ postID }: { postID: number }) => {
    // const post = useResource<usePostProps>(`https://jsonplaceholder.typicode.com/posts/${postID}`);
    const post = useDataSource<usePostProps>(() => getPost(postID)); 

    return post ? (
        <>
            <div className="mb-5 bg-green-200 text-black">
                <h1>Title: {post?.title}</h1>
                <br></br>
                <p>Body: {post?.body}</p>
            </div>
        </>
    ) : <p>Loading ...</p>
}