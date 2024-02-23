console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[2].img  
    const greeting = document.querySelector('#greeting')
    greeting.innerText = `merry meet, ${responseUsers.data[2].name}`

    const cotd_name = document.querySelector('#cotd-name')
    cotd_name.innerText = responseCards.data[8].name
    // const cotd_img = document.querySelector('#cotd-img')
    // cotd_img.src = responseCards.data[8].up_img

}
getData()

const learnMore = document.querySelector('#cotd-button')
learnMore.addEventListener('click', () => {
    // Move to Card of the Day - Single Info page
    window.location.href = "infoSinglePage.html"
        // Customize for randomized card
})


const explorePage = document.querySelector('#explore')
explorePage.addEventListener('click', () => {
    // Move to Explore page
    window.location.href = "explorePage.html"
})
const dealPage = document.querySelector('#newReading')
dealPage.addEventListener('click', () => {
    // Move to New Readings page
    window.location.href = "dealPage.html"
})
const pastPage = document.querySelector('#pastReadings')
pastPage.addEventListener('click', () => {
    // Move to Past Readings page
    window.location.href = "pastPage.html"
})