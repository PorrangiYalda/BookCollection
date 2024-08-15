import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


//make the card for each book 
const Book=(props)=>{
return(
    <div className="book-container">
      <h2 className="title">{props.title}</h2>
      <p className="author"><strong>Author:</strong> {props.author}</p>
      <p className="genre"><strong>Genre:</strong> {props.genre}</p>
      <div className="button-container">
        <button onClick={()=>props.onEdit(props.id)} className="button">Edit</button>
        <button onClick={()=>props.onDelete(props.id)} className="button">Delete</button>
      </div>
    </div>
)
}

/*   NOTE:
<button onClick={props.onEdit(props.id)} className="button">Edit</button>
here props.onEdit(props.id) is executed immediately when the Book component is rendered, 
and its return value is assigned to the onClick handler therefore props.onEdit is called as soon as 
the component renders, not when the button is clicked.
This is generally not what you want because you’re likely interested in triggering the function
in response to a user action.*/


//get the books from DB, pass to change state and map through the new array-then pass each book obj to card maker
export default function Booklist()  {
const [books,setBooks] = useState([]);


useEffect(()=>{axios.get('https://book-collection-kappa.vercel.app/books/')
    .then((response)=>{
        setBooks(response.data); //axios parses json to obj or array
    })
    .catch((error) => {
        console.log(error);
      });
    

    },[])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/books/delete/${id}`)
            .then(() => {
        setBooks(books.filter((book)=>book._id !== id)) //choose the book(s) where the _id is not equal to the id entered
            })
    }

    const handleEdit = (id) =>
    {
        window.location='/update/'+id //uses the Routes in App
    }

    return(
        <div className='container' id='root'>
            <Navbar/>
            {books.map((book)=>( //mean it returns the thing that has been returned by the Todo component for each item in the array
                <Book
                title={book.title}
                author={book.author}
                genre={book.genre}
                key={book._id}
                id={book._id}
                onDelete={handleDelete}
                onEdit={handleEdit}
                />
            ))}
        </div>
    )
}

