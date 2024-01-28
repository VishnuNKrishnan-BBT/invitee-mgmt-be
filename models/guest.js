const mongoose = require('mongoose')
const Schema = mongoose.Schema

const guestSchema = new Schema({
    guestId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    companions: {
        type: String,
        required: false
    },
    origin: {
        type: String,
        required: false
    },
    group: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    invited: {
        type: Boolean,
        required: true
    },
    attendance: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

const Guest = mongoose.model('Guest', guestSchema)

module.exports = Guest