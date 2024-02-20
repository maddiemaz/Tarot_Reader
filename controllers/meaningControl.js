const Meaning = require('../models/meaning')

const getAllMeanings = async (req, res) => {
    try{
        const meanings = await Meaning.find()
        res.json(meanings)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getMeaningById = async(req,res) => {
    try {
        const{id} = req.params
        const meaning = await meaning.findById(id)
        if (meaning) {
            return res.json(meaning)
        }
        return res.status(404).send('Interpretation not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createMeaning = async(req, res) => {
    try {
        const meaning = await new Meaning (req.body)
        await meaning.save()
        return res.status(201).json({meaning})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateMeaning = async(req, res) => {
    try {
        let {id} = req.params
        let meaning = await Meaning.findByIdAndUpdate(id, req.body, {new: true})
        if (meaning) {
            return res.status(200).json(meaning)
        }
        throw new Error ("Interpretation not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteMeaning = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await meaning.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Interpretation deleted")
        }
        throw new Error("Interpretation not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMeanings,
    getMeaningById,
    createMeaning,
    updateMeaning,
    deleteMeaning
}