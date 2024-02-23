const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        number: {type: Number, required: true},
        suit: {type: String, required: true},
        suit_icon: {type: String, required: true},
        element: {type: Array, required: false},
        element_icon: {type: Array, required: false},
        planet: {type: Array, required: false},
        planet_icon: {type: Array, required: false},
        astro: {type: Array, required: false},
        astro_icon: {type: Array, required: false},
        // symbolism: {type: String, required: false},
        meaning: {type: String, required: false},
        up_img: {type: String, required: true},
        up_key: {type: Array, required: true},
        up_gen: {type: String, required: true},
        rev_img: {type: String, required: true},
        rev_key: {type: Array, required: true},
        rev_gen: {type: String, required: true},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Card', cardSchema)