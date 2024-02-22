console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[0].img   
    
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    // const major_Suit = document.querySelector('#suitName')
    // major_Suit.innerText = responseCards.data[0].suit

}
getData()

const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "index.html"
})