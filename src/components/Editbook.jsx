import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
//hooks need to be called inside a componet and not in conditionals,loop or nested components

export default function Editbook(){
const { id } = useParams();
const [getbook,setbook]=useState({title:'',author:'',genre:''})
useEffect(()=>
  {axios.get(`http://localhost:5000/books/book/${id}`) //??
//axios get holds the response in response.data
.then((response)=>{setbook(response.data)})
    
},[id]);
//create onChange function to update the book fields
const onChange=(event)=>{
const {name,value}=event.target;
setbook((prevBook)=>({
    ...prevBook,[name]:value
}))
}
//create onSubmit finction to send the post request and save the update
const onSubmit=(e)=>{
e.preventDefault()
const updatedBook = getbook
axios.post(`http://localhost:5000/books/update/${id}`,updatedBook)
.then((res) => {
    console.log(res.data); // Log response data (optional)
    window.location = '/'; // Redirect or handle success
  })
  .catch((error) => {
    console.error('Error updating the book:', error); // Handle any errors
  });
}



return (
    <div>
     <Navbar/>
      <h3>update book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>title: </label>
          <input
            type="text"
            required
            className="form-control"
            name="title"
            value={getbook.title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
                    <label>Author: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="author"
                        value={getbook.author}
                        onChange={onChange} // Use the onChange handler here
                    />
                </div>
                <div className="form-group">
                    <label>Genre: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="genre"
                        value={getbook.genre}
                        onChange={onChange} // Use the onChange handler here
                    />
                </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Update book Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}