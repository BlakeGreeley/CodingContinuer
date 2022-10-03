const mongoose = require('mongoose');

const CodeSchema = {
    topic: {
        type: String, 
        required: [true, 'topic cannot be empty'],
        minLength: [3, 'topic cannot be less than 3 characters'],
        maxLength: [128, 'topic cannot surpass 128 characters']
    }, 

    language: {
        type: String,
        required: [true, 'coding language cannot be empty'], 
        minLength: [2, 'language cannot be less than 2 characters'],
        maxLength: [128, 'language cannot be more than 128 character']
    },

    code: {
        type: String,
        required: [true, 'code cannot be empty'], 
        minLength: [3, 'code cannot be less than 3 characters'],
        maxLength: [256, 'code cannot be more than 256 characters']
    },

    thoughts: {
        type: String,
        required: [false, 'thoughts on the code is not required but helpful'],
        maxLength: [256, 'thoughts on your code cannot surpass 256 characters']
    },

};

module.exports = mongoose.model('Code', CodeSchema);