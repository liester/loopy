import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addMessage = message => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        message
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
