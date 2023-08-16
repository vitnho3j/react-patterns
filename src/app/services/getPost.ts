import axios from "axios"

export const getPost = async (postID: number) => {

    try{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        return result.data
    } catch (error) {
        console.log(error)
    }

}