import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom';
import { getBookById } from '../services/books';


    function BookDetail() {
    const {id} = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getBookById(id) 
        .then((data) => {
            setBook(data);
            setLoading(false);
        }).catch((error) => {
            setError(error || "failed to fetch details");
            setLoading(false)
        })
    },[id])

    if (loading) {
        return (
            <main>
                <p>Loading ...</p>
            </main>
        )
    }

    if (error || !book) {
        return (
            <main>
                <p className='bg-red-200 text-red-500'>{error}</p>
            </main>
        )
    }

  return (

    <main className='py-12 px-6'>
     <div className='max-w-4xl mx-auto'>
       <Link to={"/books"} className='text-blue-600 mb-6 inline-block'> -- Back To Books </Link>
       <img
  className="w-full max-h-[500px] rounded-xl object-cover mb-6"
  src={book.image}
  alt={book.title}
/>
       <h1 className="text-4xl font-bold mb-2">
  {book.title}
</h1>

<p className="text-xl text-gray-600 mb-4">
  {book.author}
</p>

<p className="text-gray-500">
  Added: {book.addedDate}
</p>

     </div>
    </main>
  )
}

export default BookDetail