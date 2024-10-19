const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true,
        enum:['trainer','owner','breeder','veterinarian','groomer','other'],
        default:'other'
    },
    createdAt:{
        type:Date,
        required:true,
        default: new Date(),
        immutable:true
    },
    dogs:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dogs',
    },
    bio:{
        type:text
    },
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
