import { ADD_MESSAGE, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextMessageId = 0;

export const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: {
        id: ++nextMessageId,
        text: message,
        from: 'Levi Liester'
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
