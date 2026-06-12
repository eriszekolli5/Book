import React, { useEffect, useState } from "react";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    const readingBooks =
      JSON.parse(localStorage.getItem("readingBooks")) || [];

    setReadingCount(readingBooks.length);
  }, []);

  const latestBook =
    books.length > 0 ? books[books.length - 1] : null;

  return (
    <main className="pt-24 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500 text-sm">
              Total Books
            </h2>

            <p className="text-3xl font-bold mt-2">
              {books.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500 text-sm">
              Users
            </h2>

            <p className="text-3xl font-bold mt-2">
              {users.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500 text-sm">
              Reading
            </h2>

            <p className="text-3xl font-bold mt-2">
              {readingCount}
            </p>
          </div>
        </div>

        {/* Latest Book */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6">
            Latest Added Book
          </h2>

          {latestBook ? (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={latestBook.image}
                alt={latestBook.title}
                className="w-[250px] h-[350px] object-cover rounded-xl"
              />

              <div>
                <h3 className="text-3xl font-bold mb-3">
                  {latestBook.title}
                </h3>

                <p className="text-lg text-gray-600 mb-2">
                  Author: {latestBook.author}
                </p>

                <p className="text-gray-500">
                  Added Date: {latestBook.addedDate}
                </p>
              </div>
            </div>
          ) : (
            <p>No books added yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;