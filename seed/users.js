const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'Users - MongoDB connection error:'))

const main = async() => {
    const users = [
        {
            name: 'Mordo',
            // img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534640_sd.jpg;maxHeight=640;maxWidth=550',
            img: '<insert URL>',
            astro: 'Gemini',
            astro_icon: '<insert Gemini icon URL>',
            spirit_animal: 'Blue Jay',
        },
        {
            name: 'Rigbone',
            img: '<insert URL>',
            astro: 'Aries',
            astro_icon: '<insert Aries icon URL>',
            spirit_animal: 'Raccoon',
        },
        {
            name: 'Skips',
            img: '<insert URL>',
            astro: 'Taurus',
            astro_icon: '<insert Taurus icon URL>',
            spirit_animal: 'Yeti',
        },
        {
            name: 'Benson DeWoody',
            img: '<insert URL>',
            astro: 'Virgo',
            astro_icon: '<insert Virgo icon URL>',
            spirit_animal: 'Cat',
        },
        {
            name: 'Pops',
            img: '<insert URL>',
            astro: 'Sagittarius',
            astro_icon: '<insert Sagittarius icon URL>',
            spirit_animal: 'Porpoise',
        },
        {
            name: 'Muscleman',
            img: '<insert URL>',
            astro: 'Leo',
            astro_icon: '<insert Leo icon URL>',
            spirit_animal: 'My Mom',
        },
        {
            name: 'Fives',
            img: '<insert URL>',
            astro: 'Libra',
            astro_icon: '<insert Libra icon URL>',
            spirit_animal: 'Ghost Dog',
        },
    ]
    await User.insertMany(users)
    console.log('Inserted users')
}

const run = async() => {
    await main()
    db.close()
}
  
run()