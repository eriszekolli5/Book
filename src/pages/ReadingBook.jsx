import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ReadingBook() {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [displayText, setDisplayText] = useState("");
    const [currentWord, setCurrentWord] = useState(0);
    const [isReading, setIsReading] = useState(false);



    useEffect(() => {
        fetch(`http://localhost:5001/books/${id}`)
            .then((res) => res.json())
            .then((data) => setBook(data))
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        if (!book || !isReading) return;

        const words = book.paragraph.split(" ");

        const interval = setInterval(() => {
            if (currentWord < words.length) {
                setDisplayText((prev) => prev + " " + words[currentWord]);
                setCurrentWord((prev) => prev + 1);
            } else {
                setIsReading(false);
            }
        }, 300);

        return () => clearInterval(interval);
    }, [book, currentWord, isReading]);

    const startReading = () => {
        setIsReading(true);
    };

    const stopReading = () => {
        setIsReading(false);
    };

    const resetReading = () => {
        setIsReading(false);
        setCurrentWord(0);
        setDisplayText("");
    };

    if (!book) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">

            <NavLink to={`/books/${id}`} className="text-purple-800">
                ← Go Back
            </NavLink>

            <h1 className="text-3xl font-bold mb-6">{book.title}</h1>

            <div className="bg-gray-100 p-6 rounded-lg min-h-[200px]">
                <p className="text-lg leading-8">{displayText}</p>
            </div>

            <div className="flex gap-3 mt-6">
                <button
                    onClick={startReading}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Resume
                </button>

                <button
                    onClick={stopReading}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Stop
                </button>

                <button
                    onClick={resetReading}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default ReadingBook;