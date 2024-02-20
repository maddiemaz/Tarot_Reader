const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        astro: {type: String, required: false},
        astro_icon: {type: String, required: false},
        spirit_animal: {type: String, required: false},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('User', userSchema)