const Card = require('../models/card')

const getAllCards = async (req, res) => {
    try{
        const cards = await Card.find()
        res.json(cards)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCardById = async(req,res) => {
    try {
        const{id} = req.params
        const card = await card.findById(id)
        if (card) {
            return res.json(card)
        }
        return res.status(404).send('Card not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCards,
    getCardById
}