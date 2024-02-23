console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[2].img    

}
getData()

// Primary Nav
const exploreMajor = document.querySelector('#explore-majorArcana')
exploreMajor.addEventListener('click', () => {
    // Move to Major Arcana - Many page
    window.location.href = "majorMany.html"
})
const exploreWands = document.querySelector('#explore-Wands')
exploreWands.addEventListener('click', () => {
    // Move to Wands - Many page
    window.location.href = "wandsMany.html"
})
const exploreSwords = document.querySelector('#explore-Swords')
exploreSwords.addEventListener('click', () => {
    // Move to Swords - Many page
    window.location.href = "swordsMany.html"
})
const exploreCups = document.querySelector('#explore-Cups')
exploreCups.addEventListener('click', () => {
    // Move to Cups - Many page
    window.location.href = "cupsMany.html"
})
const explorePentacles = document.querySelector('#explore-Pentacles')
explorePentacles.addEventListener('click', () => {
    // Move to Pentacles - Many page
    window.location.href = "pentaclesMany.html"
})