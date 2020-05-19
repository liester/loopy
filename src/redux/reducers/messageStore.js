import produce from "immer"
import {ADD_MESSAGE, UPDATE_ALL_MESSAGES} from "../actionTypes";

const initialState = {
    messages: []
};

export default produce((draft = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            draft.messages.push(action.payload)
            break;
        case UPDATE_ALL_MESSAGES:
            draft.messages = action.payload
            break;
        default:
            return draft
    }
})
