import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState("");

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!title || !author || !date) {
    setError("Please fill all required fields");
    return;
  }

  setError("");

  const newBook = {
    title,
    author,
    image,
    addedDate: date,
  };

  fetch("http://localhost:5001/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Book added:", data);

      setTitle("");
      setAuthor("");
      setImage("");
      setDate("");
    })
    .catch((err) => {
      console.error(err);
      setError("Failed to add book");
    });
};

  return (
    <main className="py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Book</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 space-y-4"
        >
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <label className="block">
            <span className="block text-sm font-medium mb-1">
              Book Title
            </span>
            <input
              className={inputClass}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-1">
              Author
            </span>
            <input
              className={inputClass}
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>

          <label className="block">
  <span className="block text-sm font-medium mb-1">
    Published Date
  </span>

  <input
    type="date"
    className={inputClass}
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
</label>

          <label className="block">
            <span className="block text-sm font-medium mb-1">
              Image URL
            </span>
            <input
              className={inputClass}
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-lg "
          >
            Add Book
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddBook;