const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text:{
        type:String,
        required:true,
    },
    isAdoption:{
        type:Boolean,
        default:false,
    },
    dogId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dogs',
    },
    createdAt:{
        type:Date,
        required:true,
        immutable:true,
        default: new Date()
    }});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
