const fetcher = (method,ep,body,id) => {
    if (method == "GET") {
        return fetchGet(ep);
    } else if (method == "POST") {
        return fetchPost(ep,body);
    } else if (method == "DELETE") {
        return fetchDelete(ep,body)
    } else if (method == "PUT") {
        return fetchPut(ep,id,body);
    }
}

function fetchGet (ep) {
    return fetch(`https://63a0f3d024d74f9fe844f13a.mockapi.io/${ep}`)
    .then(res => {
        if (!res.ok) {return Promise.reject(new Error(`HTTP Error ${res.status}`))}
        else {return res.json()};
    }).then(res => res)
    .catch(error => console.log(error))
}

function fetchPost (ep,dataBody) {
    fetch(`https://63a0f3d024d74f9fe844f13a.mockapi.io/${ep}`, {
        method: 'POST',
        body: dataBody
    }).then(res => {
        if (!res.ok) {return Promise.reject(new Error(`HTTP Error ${res.status}`))}
        else {return res.json()};
    }).then(res => res)
    .catch(error => console.log(error))
}

function fetchDelete (ep,id) {
    fetch(`https://63a0f3d024d74f9fe844f13a.mockapi.io/${ep}/${id}`, {
        method: 'DELETE'
    })
}

function fetchPut (ep,id,dataBody) {
    fetch(`https://63a0f3d024d74f9fe844f13a.mockapi.io/${ep}/${id}`, {
        method: 'PUT',
        body: dataBody
    }).then(res => {
        if (!res.ok) {return Promise.reject(new Error(`HTTP Error ${res.status}`))}
        else {return res.json()};
    }).then(res => res)
    .catch(error => console.log(error))
}