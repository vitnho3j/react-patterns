'use client'
import { useUserProps } from "./UserInfoInterface";
import { useResource} from "./useResource";
import { useDataSource } from "./useDataSource";
import { getUser } from "../services/getUser";

export const UserInfo = ({ userID }: { userID: number }) => {
    // const user = useResource<useUserProps>(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const user = useDataSource<useUserProps>(() => getUser(userID)); 
    return user ? (
        <>
            <div className="mb-5">
                <h3>Nome: {user?.name}</h3>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
                <p>City: {user?.address.city}</p>
                <p>Phone: {user?.phone}</p>
                <p>Website: {user?.website}</p>
                <p>Company: {user?.company.name}</p>
            </div>
        </>
    ) : <p>Loading ...</p>
}