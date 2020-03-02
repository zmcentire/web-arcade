const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
    game: {
        type: String,
    }, 
    score: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('score', scoreSchema)