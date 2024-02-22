console.log('User Script - Working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)

    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[0].img   
    const user_name = document.querySelector('#user-name')
    user_name.innerText = responseUsers.data[0].name
    const user_astro = document.querySelector('#astro')
    user_astro.innerText = responseUsers.data[0].astro
    const user_astroIcon = document.querySelector('#astro-icon')
    user_astroIcon.src = responseUsers.data[0].astro_icon
    const user_animal = document.querySelector('#user-spiritAnimal')
    user_animal.innerText = responseUsers.data[0].spirit_animal

}
getData()

// Primary Nav
const pastPage = document.querySelector('#pastReadings')
pastPage.addEventListener('click', () => {
    // Move to Past Readings page
    window.location.href = "pastPage.html"
})