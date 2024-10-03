#!/usr/bin/node

function handleResponseFromAPI(promise) {
    return promise
    .then(response => {
        console.log('Got a response from API');
        return {
            status: 200,
            body: 'success'
        };
    })
    .catch(() => {
        return new Error();  
    });
}

export default handleResponseFromAPI;