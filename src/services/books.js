const baseUrl = "http://localhost:5001";

export function getAllBooks() {
    return fetch(`${baseUrl}/books`).then((response) => {
        return response.json();
    })
}

export function getBookById(id) {
    return fetch(`${baseUrl}/books/${id}`)
    .then((response) => {
        if (response.status == 404) {
            throw new Error(`Failed to fetch book with id ${id}: ${response.statusText}`);
        }
        return response.json();
    })
}

export function createBook(book) {
    return fetch(`${baseUrl}/books`, {
        method: "POST",
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(book)
    }).then((response) => {
        return response.json()
    })
}