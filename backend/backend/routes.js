const router = require('express').Router();
let Book = require('./models');
//get all
router.route('/')
.get((req,res)=>{
Book.find()
.then((books)=>res.json(books))
.catch((err)=>
    {
        console.error(err); // Log the actual error for debugging
        res.status(500).json({ error: 'An error occurred while fetching books.' });
    })
});
//add new book
//req needs to have title, author, genre
router.route('/add')
.post(async (req,res)=>{
const {title,author,genre} = req.body;
//create the new book
const newBook = await new Book({
    title:title,
    author:author,
    genre:genre
})

newBook.save()
.then(console.log("new book added"))
.catch((err)=>{console.error(err);
    res.status(500).json({ error: 'trouble adding the new book :(' })
})

})
router.route('/book/:id')
.get((req,res)=>{
   Book.findById(req.params.id)
   .then(book=>{
    res.json(book)
    
}).catch((err)=>{console.error(err);
    res.status(500).json({ error: 'trouble finding the book :(' })
})
})


router.route('/update/:id')
.post((req,res)=>
{
Book.findById(req.params.id)
.then((book)=>{
    book.author=req.body.author
    book.title=req.body.title
    book.genre=req.body.genre
    book.save()
    .then(() => res.json('book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
}).catch((err)=>
    {
        console.error(err); 
        res.status(500).json({ error: 'cannot update' });
    }) 

})

router.route('/delete/:id')
.delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
})
module.exports = router;
