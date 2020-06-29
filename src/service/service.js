/**
* Actions
*/

import * as Actions from "../actions";

/**
* Utility
*/

// import * as Utility from "../utility";

export function fetchHeaderImagesArray() {
    // let properties = require('../assets/data/properties.json');

    return dispatch => {
        dispatch(Actions.fetchHeaderImagesBegin());
        return fetch("http://localhost:3005/api/headerImagesArray")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                console.log(json)
                dispatch(Actions.fetchHeaderImagesSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchHeaderImagesFailur(error))
            });
    };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
