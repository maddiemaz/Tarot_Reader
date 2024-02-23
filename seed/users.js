const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'Users - MongoDB connection error:'))

const main = async() => {
    const users = [
        {
            name: 'Test',
            img: 'https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2ZybmF6YXJfYmxhY2tfZXllX2FtdWxldC1pbWFnZS1qb2I5MjEucG5n.png',
            astro: 'Gemini',
            astro_icon: '♊︎',
            spirit_animal: 'Chair',
        },
        {
            name: 'Lucifer',
            img: 'https://p7.hiclipart.com/preview/29/152/892/church-of-satan-the-satanic-bible-the-devil-s-notebook-lucifer-satanism-satanic.jpg',
            astro: 'Capricorn',
            astro_icon: '♑︎',
            spirit_animal: 'Goat',
        },
        {
            name: 'Alexa',
            img: 'https://www.pngitem.com/pimgs/b/225-2253040_-blue-clouds-circle-sky-background-aesthetic-blue.png',
            astro: 'Scorpio',
            astro_icon: '♏︎',
            spirit_animal: 'Cat',
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