import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


export default function CreateBook() {
    const [book, setBook] = useState({ title: '', author: '', genre: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookvar = {
            author: book.author,
            title: book.title,
            genre: book.genre
        };
        axios.post('http://localhost:5000/books/add', bookvar)
            .then((res)=>{navigate('/');})
            .catch(err => console.error("Error adding the book:", err));
            console.log("handle submit is being called")
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setBook((prevBook) => ({
            ...prevBook, [name]: value
        }));
        console.log("onChange is being called")
    };

    return (
        <div>
            <Navbar />
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={book.title}
                        onChange={onChange}
                        placeholder="Enter the book title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="form-control"
                        value={book.author}
                        onChange={onChange}
                        placeholder="Enter the author's name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        className="form-control"
                        value={book.genre}
                        onChange={onChange}
                        placeholder="Enter the genre"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Book"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}
