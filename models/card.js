const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        number: {type: Number, required: true},
        arcana: {type: String, required: false},
        arcana_icon: {type: String, required: false},
        suit: {type: String, required: false},
        suit_icon: {type: String, required: false},
        element: {type: String, required: true},
        element_icon: {type: String, required: true},
        planet: {type: String, required: true},
        planet_icon: {type: String, required: true},
        astro: {type: String, required: true},
        astro_icon: {type: String, required: true},
        symbolism: {type: String, required: false},
        meaning: {type: String, required: false},
        up_img: {type: String, required: true},
        up_key: {type: String, required: true},
        up_gen: {type: String, required: true},
        rev_img: {type: String, required: true},
        rev_key: {type: String, required: true},
        rev_gen: {type: String, required: true},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Card', cardSchema)