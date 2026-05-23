
const baseUrl = 'http://localhost:3030';

// export async function loginUser(email, password) {
//     const data = { email, password };
//     const res = await fetch(`${baseUrl}/${id}`);
//     return res.json();
// }

export async function loginUser(email, password) {
    const data = { email, password };
    const res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(email, password)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("user", JSON.stringify(data, email));

    return res.json();
}

export async function registerUser(email, password) {
    const res = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");

    localStorage.setItem("user", JSON.stringify(data,));

    return data;
}