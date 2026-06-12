import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../services/books";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isReading, setIsReading] = useState(false);

  // Rating state
  const [rating, setRating] = useState(
    Number(localStorage.getItem(`rating-${id}`)) || 0
  );

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

      navigate(`/reading/${book.id}`);
    }
  };

  const handleRating = (star) => {
    setRating(star);
    localStorage.setItem(`rating-${id}`, star);
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
          className="inline-block mb-6 text-purple-700 font-medium hover:underline"
        >
          ← Back To Books
        </Link>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-[300px] h-[450px] object-cover rounded-xl shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">
              {book.title}
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              {book.author}
            </p>

            <p className="text-gray-500 mb-6">
              Added: {book.addedDate}
            </p>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">
                Rate this book
              </h3>

              <div className="flex gap-1 text-4xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`transition hover:scale-110 ${
                      star <= rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <p className="mt-2 text-sm text-gray-600">
                  You rated this book {rating}/5
                </p>
              )}
            </div>

            <button
              onClick={handleToggleReading}
              className={`px-6 py-3 rounded-lg text-white transition ${
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