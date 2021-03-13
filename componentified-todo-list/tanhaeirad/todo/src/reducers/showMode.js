import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../actions/actionType'


export const showMode = (state = SHOW_ALL, action) => {
    switch (action.type) {

        case SHOW_ALL:
            return SHOW_ALL


        case SHOW_COMPLETED:
            return SHOW_COMPLETED


        case SHOW_UNCOMPLETED:
            return SHOW_UNCOMPLETED

        default:
            return state;
    }
}