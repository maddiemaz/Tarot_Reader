const mongoose = require('mongoose')

const readingSchema = new mongoose.Schema(
    {
        // How to pull from reading / user input during reading
        date: {type: Date, required: true},
        intention: {type: String, required: true},
        layout: {type: String, required: true},
        // Would you reference the cards like this??
        cardId: {type: mongoose.Schema.Types.ObjectId, ref: 'Card'},
        // Need another for meanings
        card_meanings: {type: mongoose.Schema.Types.ObjectId, ref: 'Card'},
        note: {type: String, required: false},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Reading', readingSchema)