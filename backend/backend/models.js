const mongoose = require('mongoose');
//create Schema class
const Schema= mongoose.Schema;
//create Schema Object
const BookSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
      
        genre: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Book',BookSchema);