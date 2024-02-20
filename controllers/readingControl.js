const Reading = require('../models/reading')

const getAllReadings = async (req, res) => {
    try{
        const readings = await Reading.find()
        res.json(readings)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getReadingById = async(req,res) => {
    try {
        const{id} = req.params
        const reading = await Reading.findById(id)
        if (reading) {
            return res.json(reading)
        }
        return res.status(404).send('Reading not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createReading = async(req, res) => {
    try {
        const reading = await new Reading (req.body)
        await reading.save()
        return res.status(201).json({reading})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateReading = async(req, res) => {
    try {
        let {id} = req.params
        let reading = await Reading.findByIdAndUpdate(id, req.body, {new: true})
        if (reading) {
            return res.status(200).json(reading)
        }
        throw new Error ("Reading not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteReading = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await reading.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Reading deleted")
        }
        throw new Error("Reading not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllReadings,
    getReadingById,
    createReading,
    updateReading,
    deleteReading
}