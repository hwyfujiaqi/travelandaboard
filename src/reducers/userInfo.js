let Type = require('../constants/actionTypes');
export default function home(state = {}, action) {
    switch (action.type) {
        case Type.HOME_DETAIL:

            return { ...state };

        default:
            return state;
    }
}
