import {ADD_TODO} from "../actionTypes";

const initialState = {
    messages: [
        {id: 1, from: 'levi', text: 'levi my first message'},
        {id: 2, from: 'matt', text: 'matt my first message'},
        {id: 3, from: 'todd', text: 'todd my first message'}
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                messages: [...state.messages, action.payload]
            }
        }
        default:
            return state;
    }
}
