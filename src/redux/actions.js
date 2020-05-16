import { ADD_MESSAGE } from "./actionTypes";
import axios from 'axios'

let nextMessageId = 0;

const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: {
        id: ++nextMessageId,
        text: message,
        from: 'Levi Liester'
    }
});

export const sendMessage = (message) => {
    return dispatch => {
        axios.get("https://httpbin.org/get").then((response)=>{
            console.log(JSON.stringify(response))
            dispatch(addMessage(message))
        })
    }
}
