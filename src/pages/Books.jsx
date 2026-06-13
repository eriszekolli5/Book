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
    <main className=" py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Books
      </h1>

      <div className="flex flex-wrap gap-8 mx-50">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}

export default Books;