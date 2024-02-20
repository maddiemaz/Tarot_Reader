const mongoose = require('mongoose')

const meaningSchema = new mongoose.Schema(
    {
        reader: {type: String, required: true},
        meaning: {type: String, required: false},
        up_key: {type: String, required: false},
        up_gen: {type: Number, required: true},
        rev_key: {type: Number, required: false},
        rev_gen: {type: String, required: true},
        note: {type: String, required: false},
        cardId: {type: mongoose.Schema.Types.ObjectId, ref: 'Card'},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Meaning', meaningSchema)