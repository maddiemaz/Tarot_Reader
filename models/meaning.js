const mongoose = require('mongoose')

const meaningSchema = new mongoose.Schema(
    {
        reader: {type: String, required: true},
        intention: {type: String, required: false},
        layout: {type: String, required: false},
        meaning: {type: String, required: false},
        up_key: {type: String, required: false},
        up_gen: {type: String, required: true},
        rev_key: {type: String, required: false},
        rev_gen: {type: String, required: false},
        note: {type: String, required: false},
        cardId: {type: mongoose.Schema.Types.ObjectId, ref: 'Card'},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Meaning', meaningSchema)