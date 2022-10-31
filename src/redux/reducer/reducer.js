import { GET_TODO_DETAILS, GET_USER_DETAILS } from "../type";

const initialState = {

    details: [],
    userdetail: {}
};

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TODO_DETAILS:
            return { ...state, details: action.payload };
        case GET_USER_DETAILS:
            return { ...state, userdetail: action.payload };
        default:
            return state;

    }

}





export default Reducer;