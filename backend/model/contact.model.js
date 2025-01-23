import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    telephoneno: {
        type: Number,
        required:true,
    },
    message: {
        type: String,
        required:true,
    }
}, {timestamps: true})


const Contact = mongoose.model('Contact', contactSchema)

export default Contact