import axios from "axios";
import { BASE_URL } from "../utils/constants";


export const createIssue = async(title, description, priority, currentUser)=>{
    try {
        const issue = await axios.post(`${BASE_URL}/issues`, {
            title,
            description,
            priority
        }, {
            headers: {
                'x-token': currentUser.token
            }
        })

        return issue.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}