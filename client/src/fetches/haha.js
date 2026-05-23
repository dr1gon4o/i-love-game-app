const baseUrl = "http://localhost:3030/data/games";

export default async function getAllGames() {
    const res = await fetch(baseUrl);
    return res.json();
}

export default async function getOneGame(id) {
    const res = await fetch(`${baseUrl}/${id}`);
    return res.json();
}

export default async function postGame(data, token) {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.Strigdy(data),
    });

    return res.json();
}

export default async function editGame(id, data, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.Strigdy(data),
    });

    return res.json();
}

export default async function editPartofGame(id, data, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.Strigdy(data),
    });

    return res.json();
}

export default async function deleteGame(id, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },

    });

    return res.json();
}