import {ADD_MESSAGE} from "../actionTypes";

const initialState = {
    messages: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                messages: [...state.messages, action.payload]
            }
        }
        default:
            return state;
    }
}
