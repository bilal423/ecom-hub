import { API_URL } from "@app/constants/app-constants";


const request = async (config) => {
    let defaultHeaders  = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Accept": '*'
    }

    const { auth, data, url, type } = config || {};

    if(auth) {
        const user = await getData('user');
        const { token } = user || {};
       
        defaultHeaders = {
            ...defaultHeaders,
            'Authorization': `Bearer ${token}`
        }

    }

    if(type === "multi-part-data") {
        defaultHeaders = {
            ...defaultHeaders,
            'Content-Type': 'multipart/form-data'
        }
    }
    
    return new Promise((resolve, reject) => {
       fetch(`${API_URL}${url}`, {
           ...config,
           headers: defaultHeaders,
           body: data,
           redirect: 'follow'
       })
       .then((response) =>  {
            return response.json()
        })
       .then(async (response) => {
        //    const { statusCode:code, code: status, data, message } = response || {};

           resolve(response);
       })
       .catch((error) => {
            reject(error)
        })
    }) 

}

export default request;