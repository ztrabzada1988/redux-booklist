
// State argument is not an application state, but only the 
// state reducer is responsible for

// a reducer always takes, state and action as its arguments
export default function(state = null, action) { // if arguments comes as undefined, set state to null (default)

    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
}