const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const cardControl = require('./controllers/cardControl')
const userControl = require('./controllers/userControl')
const readingControl = require('./controllers/readingControl')
const meaningControl = require('./controllers/meaningControl')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

// Sytem Check
app.get('/', (req, res) => {
    res.send("Your aura is moonstone")
})

// Get All Routes - All
app.get('/cards', cardControl.getAllCards)
app.get('/users', userControl.getAllUsers)
app.get('/readings', readingControl.getAllReadings)
app.get('/meanings', meaningControl.getAllMeanings)

// Find by ID Routes - All
app.get('/cards/:id', cardControl.getCardById)
app.get('/users/:id', userControl.getUserById)
app.get('/readings/:id', readingControl.getReadingById)
app.get('/meanings/:id', meaningControl.getMeaningById)
// Use the Search by Name function from previous lesson/lab **
//   -> will need to add to Controller files, then add here


// CRUD Routes - Cards
app.post('/cards/', cardControl.createCard)
app.put('/cards/:id', cardControl.updateCard)
app.delete('/cards/:id', cardControl.deleteCard)
// CRUD Routes - Users
app.post('/users/', userControl.createUser)
app.put('/users/:id', userControl.updateUser)
app.delete('/users/:id', userControl.deleteUser)
// CRUD Routes - Readings
app.post('/readings/', readingControl.createReading)
app.put('/readings/:id', readingControl.updateReading)
app.delete('/readings/:id', readingControl.deleteReading)
// CRUD Routes - Meanings
app.post('/meanings/', meaningControl.createMeaning)
app.put('/meanings/:id', meaningControl.updateMeaning)
app.delete('/meanings/:id', meaningControl.deleteMeaning)

// Delete All Cards
app.delete('/cards', cardControl.deleteAllCards)