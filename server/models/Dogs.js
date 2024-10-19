
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    image:{
        type:text
    },
    bio:{
        type:text
    },
    createdAt:{
        type:Date,
        required:true,
        immutable:true,
        default: new Date()
    }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
