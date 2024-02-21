console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[0].img
    const user_name = document.querySelector('#greeting')
    user_name.innerText = `merry meet, ${responseUsers.data[0].name}`

    const cotd_name = document.querySelector('#cotd-name')
    cotd_name.innerText = responseCards.data[0].name
    const cotd_img = document.querySelector('#cotd-img')
    cotd_img.src = responseCards.data[0].up_img

}
getData()

const exploreMajor = document.querySelector('#explore-majorArcana')
homePage.addEventListener('click', () => {
    // Move to Major Arcana - Many page
    window.location.href = "infoMajorMany.html"
})
const exploreWands = document.querySelector('#explore-Wands')
exploreWands.addEventListener('click', () => {
    // Move to Wands - Many page
    window.location.href = "infoWandsMany.html"
})
const exploreSwords = document.querySelector('#explore-Swords')
exploreSwords.addEventListener('click', () => {
    // Move to Swords - Many page
    window.location.href = "infoSwordsMany.html"
})
const exploreCups = document.querySelector('#explore-Cups')
exploreCups.addEventListener('click', () => {
    // Move to Cups - Many page
    window.location.href = "infoCupsMany.html"
})
const explorePentacles = document.querySelector('#explore-Pentacles')
explorePentacles.addEventListener('click', () => {
    // Move to Pentacles - Many page
    window.location.href = "infoCupsMany.html"
})

const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "homePage.html"
})
const usersPage = document.querySelector('#logo')
userPage.addEventListener('click', () => {
    // Move to User page
    window.location.href = "userPage.html"
})


