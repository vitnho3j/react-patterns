import axios from "axios"

export const getUser = async (userID: number) => {

    try{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
        return result.data
    } catch (error) {
        console.log(error)
    }

}