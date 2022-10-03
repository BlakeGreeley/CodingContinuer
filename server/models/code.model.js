const mongoose = require('mongoose');

const CodeSchema = {
    topic: {
        type: String, 
        required: [true, 'topic cannot be empty'],
        minLength: [3, 'topic cannot be less than 3 characters'],
        maxLength: [128, 'topic cannot surpass 128 characters']
    }, 

    
}