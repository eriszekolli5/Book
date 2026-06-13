import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link
      to={`/books/${book.id}`}
      className="block bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:-translate-y-2 transition mx-auto w-[320px] h-[480px]"
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-[300px] h-[350px] object-cover rounded mx-auto mt-2"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
      </div>
    </Link>
  );
}

export default BookCard;