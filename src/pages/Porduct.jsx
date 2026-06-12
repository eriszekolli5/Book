import { useEffect, useState } from "react";

function Product() {
  const [books, setBooks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editBook, setEditBook] = useState({
    title: "",
    author: "",
    image: "",
    addedDate: "",
    paragraph: "",
  });

  useEffect(() => {
    fetch("http://localhost:5001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5001/books/${id}`, {
      method: "DELETE",
    });

    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditBook({
      title: book.title || "",
      author: book.author || "",
      image: book.image || "",
      addedDate: book.addedDate || "",
      paragraph: book.paragraph|| "",
    });
  };

  const handleSave = async () => {
    const updatedBook = {
      ...editBook,
      id: editingId,
    };

    await fetch(`http://localhost:5001/books/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });

    setBooks((prev) =>
      prev.map((book) =>
        book.id === editingId ? updatedBook : book
      )
    );

    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Books</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border-grey-200 rounded-xl p-3 shadow "
          >
            {editingId === book.id ? (
              <>
                <input
                  value={editBook.title}
                  onChange={(e) =>
                    setEditBook({
                      ...editBook,
                      title: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded mb-2"
                  placeholder="Title"
                />

                <input
                  value={editBook.author}
                  onChange={(e) =>
                    setEditBook({
                      ...editBook,
                      author: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded mb-2"
                  placeholder="Author"
                />

                <input
                  value={editBook.image}
                  onChange={(e) =>
                    setEditBook({
                      ...editBook,
                      image: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded mb-2"
                  placeholder="Image"
                />

                <input
                  value={editBook.paragraph}
                  onChange={(e) =>
                    setEditBook({
                      ...editBook,
                      paragraph: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded mb-2"
                  placeholder="Paragraph"
                />

                <input
                  type="date"
                  value={editBook.addedDate}
                  onChange={(e) =>
                    setEditBook({
                      ...editBook,
                      addedDate: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded mb-3"
                />

                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Done
                  </button>

                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />

                <h2 className="font-semibold text-base mt-2 truncate">
                  {book.title}
                </h2>

                <p className="text-sm text-gray-600">
                  {book.author}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {book.addedDate}
                </p>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(book)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(book.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;