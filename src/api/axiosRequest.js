
import axios from 'axios';

export async function AxiosRequest(url, method, headers, params) {

    return params ? axios({

        url: url,
        method: method,
        headers: headers,
        data: params,

    })
        : axios({

            url: url,
            method: method,
            headers: headers,
            data: {},

        });

}


const GetApiDetails = () => {

    const headers = {
        "Content-Type": "application/json"
    }

    return AxiosRequest("https://jsonplaceholder.typicode.com/todos",
        "GET", headers, {})
};

const GetUserApiDetails = (id) => {

    const headers = {
        "Content-Type": "application/json"
    }

    return AxiosRequest(`https://jsonplaceholder.typicode.com/users/${id}`,
        "GET", headers, {})

};

export { GetApiDetails, GetUserApiDetails };

