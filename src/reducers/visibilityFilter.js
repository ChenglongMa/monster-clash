import {ActionTypes, VisibilityFilters} from '../actions'

// state is default filter
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter;