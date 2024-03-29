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

// Secondary Nav
const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "homePage.html"
})
const userPage = document.querySelector('#user-img')
userPage.addEventListener('click', () => {
    // Move to User page
    window.location.href = "userPage.html"
})

// Side Menu
function openMenu() {
    document.getElementById("sideMenu").style.width = "75%";
}
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}
const menuTitle = document.querySelector('#menu-title')
menuTitle.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "homePage.html"
})
const menuExplore = document.querySelector('#menu-explore')
menuExplore.addEventListener('click', () => {
    // Move to Explore page
    window.location.href = "explorePage.html"
})
const menuNewReading = document.querySelector('#menu-newReading')
menuNewReading.addEventListener('click', () => {
    // Move to Deal page
    window.location.href = "dealPage.html"
})
const menuPastReadings = document.querySelector('#menu-pastReadings')
menuPastReadings.addEventListener('click', () => {
    // Move to Past page
    window.location.href = "pastPage.html"
})