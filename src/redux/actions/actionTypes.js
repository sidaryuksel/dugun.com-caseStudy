export const GET_IMAGE = 'USER_GET_IMAGE';
export const GET_HOTEL_INFO = 'GET_HOTEL_INFO';

export const hotelsActions = {
    getHotelsInfo
}

const SERVER_URL = "https://private-1be47-duguncomapis.apiary-mock.com";

function getHotelsInfoSuccess(hotels){
    return {type: GET_HOTEL_INFO, payload: hotels}
}

function getHotelsInfo(){
    console.log("actiondayım")
    return function (dispatch){
        let url = SERVER_URL + "/companies"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getHotelsInfoSuccess(result)))
        .catch(handleError)
    }
}

function handleError(error){
    console.error(error);
    throw error;
}