console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[2].img   
   
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const responseMeanings = await axios.get(`http://localhost:3001/meanings`)
    console.log(responseMeanings)

    // Card Content
    const card_Suit = document.querySelector('#suitName')
    card_Suit.innerText = responseCards.data[8].suit
    const card_Name = document.querySelector('#headerName')
    card_Name.innerText = responseCards.data[8].name

    // const card_imgUp = document.querySelector('#imgUp')
    // card_imgUp.src = responseCards.data[8].up_img

    const card_elementIcon = document.querySelector('#element-icon')
    card_elementIcon.innerText = responseCards.data[8].element_icon
    const card_planetIcon = document.querySelector('#planet-icon')
    card_planetIcon.innerText = responseCards.data[8].planet_icon
    const card_astroIcon = document.querySelector('#astro-icon')
    card_astroIcon.innerText = responseCards.data[8].astro_icon
    const card_elementName = document.querySelector('#element-name')
    card_elementName.innerText = responseCards.data[8].element
    const card_planetName = document.querySelector('#planet-name')
    card_planetName.innerText = responseCards.data[8].planet
    const card_astroName = document.querySelector('#astro-name')
    card_astroName.innerText = responseCards.data[8].astro

    const card_keyUp = document.querySelector('#key-Up')
    card_keyUp.innerText = responseCards.data[8].up_key
    const card_keyRev = document.querySelector('#key-Rev')
    card_keyRev.innerText = responseCards.data[8].rev_key

    const card_meaningUp = document.querySelector('#meaning-Up')
    card_meaningUp.innerText = responseCards.data[8].up_gen
    const card_meaningRev = document.querySelector('#meaning-Rev')
    card_meaningRev.innerText = responseCards.data[8].rev_gen

    // Additional Meanings
    const mmCareer_reader = document.querySelector('#mystic-Career-reader')
    mmCareer_reader.innerText = responseMeanings.data[0].reader
    const mmCareer_intention = document.querySelector('#mystic-Career-intention')
    mmCareer_intention.innerText = responseMeanings.data[0].intention
    const mmCareer_up = document.querySelector('#mystic-CareerUp-content')
    mmCareer_up.innerText = responseMeanings.data[0].up_gen
    const mmCareer_rev = document.querySelector('#mystic-CareerRev-content')
    mmCareer_rev.innerText = responseMeanings.data[0].rev_gen

    const mmFinances_reader = document.querySelector('#mystic-Finances-reader')
    mmFinances_reader.innerText = responseMeanings.data[1].reader
    const mmFinances_intention = document.querySelector('#mystic-Finances-intention')
    mmFinances_intention.innerText = responseMeanings.data[1].intention
    const mmFinances_up = document.querySelector('#mystic-FinancesUp-content')
    mmFinances_up.innerText = responseMeanings.data[1].up_gen
    const mmFinances_rev = document.querySelector('#mystic-FinancesRev-content')
    mmFinances_rev.innerText = responseMeanings.data[1].rev_gen

    const mmLove_reader = document.querySelector('#mystic-Love-reader')
    mmLove_reader.innerText = responseMeanings.data[2].reader
    const mmLove_intention = document.querySelector('#mystic-Love-intention')
    mmLove_intention.innerText = responseMeanings.data[2].intention
    const mmLove_up = document.querySelector('#mystic-LoveUp-content')
    mmLove_up.innerText = responseMeanings.data[2].up_gen
    const mmLove_rev = document.querySelector('#mystic-LoveRev-content')
    mmLove_rev.innerText = responseMeanings.data[2].rev_gen
    const mmLove_note = document.querySelector('#mystic-LoveNote-content')
    mmLove_note.innerText = responseMeanings.data[2].note

    const dDecision_reader = document.querySelector('#daily-Decision-reader')
    dDecision_reader.innerText = responseMeanings.data[3].reader
    const dDecision_intention = document.querySelector('#daily-Decision-intention')
    dDecision_intention.innerText = responseMeanings.data[3].intention
    const dDecision_layout = document.querySelector('#daily-Decision-title')
    dDecision_layout.innerText = `Should you say ${responseMeanings.data[3].layout}?`
    const dDecision_up = document.querySelector('#daily-Decision-content')
   dDecision_up.innerText = responseMeanings.data[3].up_gen
    
}
getData()

const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', () => {
    // Move back to Explore page
    window.location.href = "explorePage.html"
})