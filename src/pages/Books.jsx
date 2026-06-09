import React, { useEffect, useState } from "react";
import { getAllBooks } from "../services/books";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="px-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}

export default Books;