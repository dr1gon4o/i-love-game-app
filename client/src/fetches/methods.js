const baseUrl = 'http://localhost:3030/data/games';
const baseUrlCOM = 'http://localhost:3030/data/comments';


// export async function getAllGames() {
//     const res = await fetch(baseUrl);
//     return res.json();
// }

// export async function getGameById(id) {
//     const res = await fetch(`${baseUrl}/${id}`);
//     return res.json();
// }

// export async function createGame(data) {
//     const res = await fetch(baseUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     });
//     return res.json();
// }

// export async function updateGame(id, data) {
//     const res = await fetch(`${baseUrl}/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     });
//     return res.json();
// }

// export async function deleteGame(id) {
//     const res = await fetch(`${baseUrl}/${id}`, {
//         method: 'DELETE'
//     });
//     return res.json();
// }

export async function getAllGames() {
    const res = await fetch(baseUrl);
    return res.json();
}

export async function getOneGame(id) {
    const res = await fetch(`${baseUrl}/${id}`);
    return res.json();
}

export async function postGame(data, token) {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

export async function editGame(id, data, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

// ne e pozvoleno v tozi serve na softuni
// export async function editPartofGame(id, data, token) {
//     const res = await fetch(`${baseUrl}/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(data),
//     });

//     return res.json();
// }

export async function deleteGame(id, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': token },
    });

    return res.json();
}


export async function getComments(id) {
    const res = await fetch(`${baseUrlCOM}?where=gameId%3D%22${id}%22`, {
        method: 'GET',
        headers: { 'X-Authorization': token },
    });

    return res.json();
}

export async function postComment(data, token) {
    const res = await fetch(`${baseUrlCOM}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },

        body: JSON.stringify(data),
    });

    return res.json();
}
