const db = require('../db')
const Card = require('../models/card')
const User = require('../models/user')
const Reading = require('../models/reading')

db.on('error', console.error.bind(console, 'Readings - MongoDB connection error:'))

const main = async() => {
    // Cards
    const wandA = await Card.find({ name: 'Ace of Wands' })
    const wand2 = await Card.find({ name: 'Two of Wands' }) 
    const wand3 = await Card.find({ name: 'Three of Wands' }) 
    const wand4 = await Card.find({ name: 'Four of Wands' }) 
    const wand5 = await Card.find({ name: 'Five of Wands' }) 
    const wand6 = await Card.find({ name: 'Six of Wands' }) 
    const wand7 = await Card.find({ name: 'Seven of Wands' }) 
    const wand8 = await Card.find({ name: 'Eight of Wands' }) 
    const wand9 = await Card.find({ name: 'Nine of Wands' }) 
    const wand10 = await Card.find({ name: 'Ten of Wands' }) 
    const wandP = await Card.find({ name: 'Page of Wands' }) 
    const wandKn = await Card.find({ name: 'Knight of Wands' })
    const wandQ = await Card.find({ name: 'Queen of Wands' }) 
    const wandKi = await Card.find({ name: 'King of Wands' }) 

    const swordA = await Card.find({ name: 'Ace of Swords' })
    const sword2 = await Card.find({ name: 'Two of Swords' }) 
    const sword3 = await Card.find({ name: 'Three of Swords' }) 
    const sword4 = await Card.find({ name: 'Four of Swords' }) 
    const sword5 = await Card.find({ name: 'Five of Swords' }) 
    const sword6 = await Card.find({ name: 'Six of Swords' }) 
    const sword7 = await Card.find({ name: 'Seven of Swords' }) 
    const sword8 = await Card.find({ name: 'Eight of Swords' }) 
    const sword9 = await Card.find({ name: 'Nine of Swords' }) 
    const sword10 = await Card.find({ name: 'Ten of Swords' }) 
    const swordP = await Card.find({ name: 'Page of Swords' }) 
    const swordKn = await Card.find({ name: 'Knight of Swords' })
    const swordQ = await Card.find({ name: 'Queen of Swords' }) 
    const swordKi = await Card.find({ name: 'King of Swords' }) 

    const cupA = await Card.find({ name: 'Ace of Cups' })
    const cup2 = await Card.find({ name: 'Two of Cups' }) 
    const cup3 = await Card.find({ name: 'Three of Cups' }) 
    const cup4 = await Card.find({ name: 'Four of Cups' }) 
    const cup5 = await Card.find({ name: 'Five of Cups' }) 
    const cup6 = await Card.find({ name: 'Six of Cups' }) 
    const cup7 = await Card.find({ name: 'Seven of Cups' }) 
    const cup8 = await Card.find({ name: 'Eight of Cups' }) 
    const cup9 = await Card.find({ name: 'Nine of Cups' }) 
    const cup10 = await Card.find({ name: 'Ten of Cups' }) 
    const cupP = await Card.find({ name: 'Page of Cups' }) 
    const cupKn = await Card.find({ name: 'Knight of Cups' })
    const cupQ = await Card.find({ name: 'Queen of Cups' }) 
    const cupKi = await Card.find({ name: 'King of Cups' }) 

    const pentA = await Card.find({ name: 'Ace of Pentacles' })
    const pent2 = await Card.find({ name: 'Two of Pentacles' }) 
    const pent3 = await Card.find({ name: 'Three of Pentacles' }) 
    const pent4 = await Card.find({ name: 'Four of Pentacles' }) 
    const pent5 = await Card.find({ name: 'Five of Pentacles' }) 
    const pent6 = await Card.find({ name: 'Six of Pentacles' }) 
    const pent7 = await Card.find({ name: 'Seven of Pentacles' }) 
    const pent8 = await Card.find({ name: 'Eight of Pentacles' }) 
    const pent9 = await Card.find({ name: 'Nine of Pentacles' }) 
    const pent10 = await Card.find({ name: 'Ten of Pentacles' }) 
    const pentP = await Card.find({ name: 'Page of Pentacles' }) 
    const pentKn = await Card.find({ name: 'Knight of Pentacles' })
    const pentQ = await Card.find({ name: 'Queen of Pentacles' }) 
    const pentKi = await Card.find({ name: 'King of Pentacles' })

    const fool = await Card.find({ name: '0. The Fool' })
    const magician = await Card.find({ name: 'I. The Magician' }) 
    const highPriestess = await Card.find({ name: 'II. The High Priestess' }) 
    const empress = await Card.find({ name: 'III. The Empress' }) 
    const emperor = await Card.find({ name: 'IV. The Emperor' }) 
    const hierophant = await Card.find({ name: 'V. The Hierophant' }) 
    const lovers = await Card.find({ name: 'VI. The Lovers' }) 
    const chariot = await Card.find({ name: 'VII. The Chariot' }) 
    const strength = await Card.find({ name: 'VIII. Strength' }) 
    const hermit = await Card.find({ name: 'IX. The Hermit' }) 
    const wheelOfFortune = await Card.find({ name: 'X. The Wheel of Fortune' }) 
    const justice = await Card.find({ name: 'XI. Justice' })
    const hangedMan = await Card.find({ name: 'XII. The Hanged Man' }) 
    const death = await Card.find({ name: 'XIII. Death' }) 
    const temperance = await Card.find({ name: 'XIV. Temperance' })
    const devil = await Card.find({ name: 'XV. The Devil' }) 
    const tower = await Card.find({ name: 'XVI. The Tower' }) 
    const star = await Card.find({ name: 'XVII. The Star' }) 
    const moon = await Card.find({ name: 'XVIII. The Moon' }) 
    const sun = await Card.find({ name: 'XIX. The Sun' }) 
    const judgement = await Card.find({ name: 'XX. Judgement' }) 
    const world = await Card.find({ name: 'XXI. The World' }) 

    // Users
    const mordecai = await User.find({ name: 'Mordo' }) 
    const rigby = await User.find({ name: 'Rigbone' }) 
    const skips = await User.find({ name: 'Skips' }) 
    const benson = await User.find({ name: 'Benson DeWoody' })
    const pops = await User.find({ name: 'Pops' })
    const muscleMan = await User.find({ name: 'Muscleman' }) 
    const highFiveGhost = await User.find({ name: 'Fives' }) 

    const readings = [
        {
            date: '<insert DATE but in Date Value format>',
            intention: '<insert intention>',
            layout: '<insert layout>',
            note: '<insert Note OR NAH>',
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534640_sd.jpg;maxHeight=640;maxWidth=550',
            userId: mordecai[0]._id,
            // Not sure if card ID would be used here or within the array; in the array I believe
            cardId: [
                fool[0]._id,
                hangedMan[0].id,
                sun[0]._id,
            ],
            // To pull on meanings, would need another array for meaning / orientation
            card_meanings: [
                fool[0]._id,
                hangedMan[0].id,
                sun[0]._id,
            ],
        },
        
    ]
    await Reading.insertMany(readings)
    console.log('Inserted readings')
}

const run = async() => {
    await main()
    db.close()
}
  
run()