console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[2].img   
   
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

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

    
}
getData()

const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', () => {
    // Move back to Explore page
    window.location.href = "explorePage.html"
})