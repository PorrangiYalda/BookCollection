import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from './components/Addbook'
import Booklist from './components/Booklist'
import EditBook from './components/Editbook'
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <>
    
<BrowserRouter>
<Routes>
  
  <Route path="/" element={<Booklist/>}/>
  <Route path="/update/:id" element={<EditBook/>}/>
  <Route path="/add" element={<CreateBook/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
