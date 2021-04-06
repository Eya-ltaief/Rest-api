// 1 now we need to create ou model
// for that we need schema meaning we need mongoose
// the schema will define the structure of our data
//the mongoose will just connect us to our data
// helping us to manage it 

const mongoose = require("mongoose");


// schema
const schema = mongoose.Schema

const contactSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number
})

module.exports = Contact = mongoose.model('contact', contactSchema)