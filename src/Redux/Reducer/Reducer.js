import { UserStr } from "../Actions/Action"

const init = {
    isAuth: false,
    data: [],
}

export const Reducer = (state = init, action) => {
    switch (action.type) {
        case UserStr.isAuth:
            return { ...state, isAuth: action.payload };
        case UserStr.data:
            return { ...state, data: action.payload };
        default:
            return state
    }
}