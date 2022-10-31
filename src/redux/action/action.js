import { GET_TODO_DETAILS, GET_USER_DETAILS } from "../type";
import { GetApiDetails, GetUserApiDetails } from "../../api/axiosRequest";


const Action = () => {

    return function (dispatch) {
        return GetApiDetails().then((res) => {


            dispatch({
                type: GET_TODO_DETAILS,
                payload: res.data,
            });
        });


    }
}

const GetUserAction = (id) => {

    return function (dispatch) {
        return GetUserApiDetails(id).then((res) => {


            dispatch({
                type: GET_USER_DETAILS,
                payload: res.data,
            });
        });


    }


}
//     return{
//         type:GET_TODO_DETAILS,
//         payload:'',
//     }
// };

export { Action, GetUserAction }


