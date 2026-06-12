import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookById } from "../services/books";

function BookDetail() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    getBookById(id)
      .then((data) => {
        setBook(data);

        const readingBooks =
          JSON.parse(localStorage.getItem("readingBooks")) || [];

        const exists = readingBooks.some(
          (item) => item.id === data.id
        );

        setIsReading(exists);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message || "Failed to fetch details");
        setLoading(false);
      });
  }, [id]);

  const handleToggleReading = () => {
    const readingBooks =
      JSON.parse(localStorage.getItem("readingBooks")) || [];

    if (isReading) {
      const updatedBooks = readingBooks.filter(
        (item) => item.id !== book.id
      );

      localStorage.setItem(
        "readingBooks",
        JSON.stringify(updatedBooks)
      );

      setIsReading(false);
    } else {
      readingBooks.push(book);

      localStorage.setItem(
        "readingBooks",
        JSON.stringify(readingBooks)
      );

      setIsReading(true);
    }
  };

  if (loading) {
    return (
      <main className="py-12 px-6">
        <p>Loading...</p>
      </main>
    );
  }

  if (error || !book) {
    return (
      <main className="py-12 px-6">
        <p className="bg-red-100 text-red-600 p-3 rounded">
          {error || "Book not found"}
        </p>
      </main>
    );
  }

  return (
    <main className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/books"
          className="inline-block mb-6 text-purple-700 font-medium"
        >
          ← Back To Books
        </Link>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-[300px] h-[450px] object-cover rounded-xl shadow-lg"
          />

          <div>
            <h1 className="text-4xl font-bold mb-3">
              {book.title}
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              {book.author}
            </p>

            <p className="text-gray-500 mb-6">
              Added: {book.addedDate}
            </p>

            <button
              onClick={handleToggleReading}
              className={`px-6 py-3 rounded-lg text-white ${
                isReading
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-purple-700 hover:bg-purple-600"
              }`}
            >
              {isReading ? "Cancel Reading" : "Read"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookDetail;