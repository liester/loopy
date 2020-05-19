import {ADD_MESSAGE, UPDATE_ALL_MESSAGES} from "./actionTypes";
import axios from 'axios'
const serviceURL = process.env.serviceURL || "http://localhost:4000"
let nextMessageId = 0;

const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: {
        id: ++nextMessageId,
        text: message,
        from: 'Levi Liester'
    }
});

const updateAllMessages = messages => ({
    type: UPDATE_ALL_MESSAGES,
    payload: messages
})

export const sendMessage = (message) => {
    return dispatch => {
        const messageToDispatch = addMessage(message);
        axios.put(`${serviceURL}/messages`, messageToDispatch.payload).then((response) => {
            console.log(JSON.stringify(response))
            getMessages()(dispatch)
        })
    }
}

export const getMessages = () => {
    return dispatch => {
        axios.get(`${serviceURL}/messages`).then((response) => {
            console.log(JSON.stringify(response))
            dispatch(updateAllMessages(response.data))
        })
    }
}
