import { UserInfo } from "./UserInfo";
import { PostInfo } from "./PostInfo";

export default function Home() {
    return (
        <>
            <UserInfo 
                userID={1}
            />

            <PostInfo 
                postID={1}
            />

            <UserInfo 
                userID={2}
            />

            <PostInfo 
                postID={2}
            />
            
        </>
    )
}