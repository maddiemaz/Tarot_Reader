const card = require('../models/card')
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
        const card = await Card.findById(id)
        if (card) {
            return res.json(card)
        }
        return res.status(404).send('Card not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createCard = async(req, res) => {
    try {
        const card = await new Card (req.body)
        await card.save()
        return res.status(201).json({card})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateCard = async(req, res) => {
    try {
        let {id} = req.params
        let card = await Card.findByIdAndUpdate(id, req.body, {new: true})
        if (card) {
            return res.status(200).json(card)
        }
        throw new Error ("Card not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteCard = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await card.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Card deleted")
        }
        throw new Error("Card not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

const deleteAllCards = async(req, res) => {
    const deleted = await card.deleteMany()
    if(deleted) {
        return res.status(200).send("Cards deleted")
    }
}


module.exports = {
    getAllCards,
    getCardById,
    updateCard,
    createCard,
    deleteCard,
    deleteAllCards
}