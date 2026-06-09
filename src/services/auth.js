export const baseUrl = "http://localhost:5001";

export function registerUser(newUser) {
    return fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    }).then((response) => response.json())
}

export function loginUser(email, password) {
    return fetch(`${baseUrl}/users?email=${email}`)
    .then((response) => response.json())
    .then((users) => {
        const user = users[0];
        localStorage.setItem("userId", user.id);
    })
}

export function logOutUser() {
    localStorage.removeItem("userId");
}

export function getUser() {
    const currentUser = localStorage.getItem("user");
    if(!currentUser || currentUser === "undefined") {
        localStorage.removeItem("user");
        return null;
    } 
    return JSON.parse(currentUser);
}