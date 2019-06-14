import {DiceActions} from "./diceAction";

export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

let nextTodoId = 0;
export const addTodo = text => ({
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: ActionTypes.TOGGLE_TODO,
    id
});
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const roll = nextValue => ({
    type: DiceActions.SETTING,
    nextValue
});