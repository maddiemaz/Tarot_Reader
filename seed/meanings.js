const db = require('../db')
const Card = require('../models/card')
const Meaning = require('../models/meaning')

db.on('error', console.error.bind(console, 'Meanings - MongoDB connection error:'))

const main = async() => {
    // Cards
    // const wandA = await Card.find({ name: 'Ace of Wands' })
    // const wand2 = await Card.find({ name: 'Two of Wands' }) 
    // const wand3 = await Card.find({ name: 'Three of Wands' }) 
    // const wand4 = await Card.find({ name: 'Four of Wands' }) 
    // const wand5 = await Card.find({ name: 'Five of Wands' }) 
    // const wand6 = await Card.find({ name: 'Six of Wands' }) 
    // const wand7 = await Card.find({ name: 'Seven of Wands' }) 
    // const wand8 = await Card.find({ name: 'Eight of Wands' }) 
    // const wand9 = await Card.find({ name: 'Nine of Wands' }) 
    // const wand10 = await Card.find({ name: 'Ten of Wands' }) 
    // const wandP = await Card.find({ name: 'Page of Wands' }) 
    // const wandKn = await Card.find({ name: 'Knight of Wands' })
    // const wandQ = await Card.find({ name: 'Queen of Wands' }) 
    // const wandKi = await Card.find({ name: 'King of Wands' }) 

    // const swordA = await Card.find({ name: 'Ace of Swords' })
    // const sword2 = await Card.find({ name: 'Two of Swords' }) 
    // const sword3 = await Card.find({ name: 'Three of Swords' }) 
    // const sword4 = await Card.find({ name: 'Four of Swords' }) 
    // const sword5 = await Card.find({ name: 'Five of Swords' }) 
    // const sword6 = await Card.find({ name: 'Six of Swords' }) 
    // const sword7 = await Card.find({ name: 'Seven of Swords' }) 
    // const sword8 = await Card.find({ name: 'Eight of Swords' }) 
    // const sword9 = await Card.find({ name: 'Nine of Swords' }) 
    // const sword10 = await Card.find({ name: 'Ten of Swords' }) 
    // const swordP = await Card.find({ name: 'Page of Swords' }) 
    // const swordKn = await Card.find({ name: 'Knight of Swords' })
    // const swordQ = await Card.find({ name: 'Queen of Swords' }) 
    // const swordKi = await Card.find({ name: 'King of Swords' }) 

    // const cupA = await Card.find({ name: 'Ace of Cups' })
    // const cup2 = await Card.find({ name: 'Two of Cups' }) 
    // const cup3 = await Card.find({ name: 'Three of Cups' }) 
    // const cup4 = await Card.find({ name: 'Four of Cups' }) 
    // const cup5 = await Card.find({ name: 'Five of Cups' }) 
    // const cup6 = await Card.find({ name: 'Six of Cups' }) 
    // const cup7 = await Card.find({ name: 'Seven of Cups' }) 
    // const cup8 = await Card.find({ name: 'Eight of Cups' }) 
    // const cup9 = await Card.find({ name: 'Nine of Cups' }) 
    // const cup10 = await Card.find({ name: 'Ten of Cups' }) 
    // const cupP = await Card.find({ name: 'Page of Cups' }) 
    // const cupKn = await Card.find({ name: 'Knight of Cups' })
    // const cupQ = await Card.find({ name: 'Queen of Cups' }) 
    // const cupKi = await Card.find({ name: 'King of Cups' }) 

    // const pentA = await Card.find({ name: 'Ace of Pentacles' })
    // const pent2 = await Card.find({ name: 'Two of Pentacles' }) 
    // const pent3 = await Card.find({ name: 'Three of Pentacles' }) 
    // const pent4 = await Card.find({ name: 'Four of Pentacles' }) 
    // const pent5 = await Card.find({ name: 'Five of Pentacles' }) 
    // const pent6 = await Card.find({ name: 'Six of Pentacles' }) 
    // const pent7 = await Card.find({ name: 'Seven of Pentacles' }) 
    // const pent8 = await Card.find({ name: 'Eight of Pentacles' }) 
    // const pent9 = await Card.find({ name: 'Nine of Pentacles' }) 
    // const pent10 = await Card.find({ name: 'Ten of Pentacles' }) 
    // const pentP = await Card.find({ name: 'Page of Pentacles' }) 
    // const pentKn = await Card.find({ name: 'Knight of Pentacles' })
    // const pentQ = await Card.find({ name: 'Queen of Pentacles' }) 
    // const pentKi = await Card.find({ name: 'King of Pentacles' })

    const fool = await Card.find({ name: '0. The Fool' })
    const magician = await Card.find({ name: '1. The Magician' }) 
    const highPriestess = await Card.find({ name: '2. The High Priestess' }) 
    const empress = await Card.find({ name: '3. The Empress' }) 
    const emperor = await Card.find({ name: '4. The Emperor' }) 
    const hierophant = await Card.find({ name: '5. The Hierophant' }) 
    const lovers = await Card.find({ name: '6. The Lovers' }) 
    const chariot = await Card.find({ name: '7. The Chariot' }) 
    const strength = await Card.find({ name: '8. Strength' }) 
    const hermit = await Card.find({ name: '9. The Hermit' }) 
    const wheelOfFortune = await Card.find({ name: '10. The Wheel of Fortune' }) 
    const justice = await Card.find({ name: '11. Justice' })
    const hangedMan = await Card.find({ name: '12. The Hanged Man' }) 
    const death = await Card.find({ name: '13. Death' }) 
    const temperance = await Card.find({ name: '14. Temperance' })
    const devil = await Card.find({ name: '15. The Devil' }) 
    const tower = await Card.find({ name: '16. The Tower' }) 
    const star = await Card.find({ name: '17. The Star' }) 
    const moon = await Card.find({ name: '18. The Moon' }) 
    const sun = await Card.find({ name: '19. The Sun' }) 
    const judgement = await Card.find({ name: '20. Judgement' }) 
    const world = await Card.find({ name: '21. The World' }) 

    const meanings = [
        {
            reader: 'Mystic Monday',
            intention: 'Career',
            up_gen: 'Drawing the Strength card when it comes to your career can indicate that you will need to draw on your skills of perseverance, courage, and endurance to get through the upcoming challenges ahead of you. Your career can take a challenging turn where you will be tested, showing yourself and your colleagues the inner strength of empathy and compassion, especially if a part of you wants to react out of anger due to survival instinct. Subdue any animalistic instincts that threaten to overrule your inner strength and know that inner strength does not always mean an outward display. Strength could also be a sign to make more courageous moves in the workplace, and don’t be afraid to be seen for all the work that you do. Strength gives you the courage and perseverance needed to take your career to the next level.',
            rev_gen: 'Like the cowardly Lion in the Wizard of Oz, the Strength card reversed in career can indicate that you are letting your fears get in the way of your career ambitions. This will be a good time to take note of what anxieties and blocks are standing in your way and if these challenges are real or imagined. Sometimes, we let our fears become bigger than they actually need to be to keep ourselves safe from perceived danger. Ask yourself what is stopping you from shining as big and bright as you want to be? Identifying what this is can help you move past them. Once you conquer this challenge, you’ll restore confidence in yourself that you can face anything standing in your way.',
            cardId: strength[0]._id
        },
        {
            reader: 'Mystic Monday',
            intention: 'Finances',
            up_gen: 'In finances, the Strength card asks you to look at the big picture and to have the patience to set the wheels in motion towards your financial dreams. The financial game is one of endurance and knowing when it is the right moment to strike. Bide your time wisely, like a predator waiting for its prey. There is no rush right now to make any major financial decisions. Wait until the right moment to pounce on opportunities, and you will be rewarded for your patience and self-control.',
            rev_gen: 'In finances, Strength tarot card reversed can indicate compulsivity when it comes to managing your money. It would be wise to take a more conservative approach and to manage your finances with looking at your long term financial goals in mind. This can point to an inner feeling of lack and could be a good time to review what money stories are running in the background and taking control over your financial decisions. It’s time to flip the narrative into a more empowering story, where you do have a good handle over your finances and trust yourself to make the best financial decisions for yourself and loved ones.',
            cardId: strength[0]._id
        },
        {
            reader: 'Mystic Monday',
            intention: 'Love',
            up_gen: 'In love, the Strength card can lead you to a romance that feels safe, romantic, and passionate. There is a solid foundation present in the relationship, which allows you both to be vulnerable with each other, a true strength that builds strong bonds. Drawing the Strength card in a love tarot reading means that you and your partner have what it takes to get through tough challenges together, and that a situation like this will come to test your relationship. It will take endurance and strength to overcome this challenge and can be a turning point in your relationship. The Strength tarot card is about inner strength and having empathy, especially towards each other in trying moments. Draw on your perseverance and empathy when you’re faced with these challenges with your partner.',
            rev_gen: 'Strength tarot card reversed in love can indicate a lack of a strong foundation that can help the relationship stand the trials and tribulations that stand in the way of a lasting relationship. This can also point to a codependency that is present in the relationship where one partner tends to be more dominant than the other, with the other partner being more passive. This can create a toxic relationship with an imbalance of power and individual needs. You may need to take a break from your relationship to recoup and prioritize your needs. If you’re both willing to look at the issues from a place of empathy rather than blame, this could be a test to see if you’ll be able to survive this challenge to reach the next level in your relationship.',
            note: 'If single, the Strength card asks that you don’t give up on your love life. You will have to draw on your skills of endurance that the right person will come at the right time. Have empathy for yourself if you’re being challenged of how things should be versus what they actually are. Strength draws on your courage to be confident in yourself, no matter what.',
            cardId: strength[0]._id
        },
        {
            reader: 'Daily Tarot',
            intention: 'Decision',
            layout: 'Yes or No',
            up_gen: 'Yes - you are strong!',
            cardId: strength[0]._id
        },        
        
    ]
    await Meaning.insertMany(meanings)
    console.log('Inserted meanings')
}

const run = async() => {
    await main()
    db.close()
}
  
run()