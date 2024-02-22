console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[0].img   
   
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    const responseReadings = await axios.get(`http://localhost:3001/readings`)
    console.log(responseReadings)

    const card_imgUp = document.querySelector('#imgUp')
    card_imgUp.src = responseCards.data[22].card_images
    const card_Name = document.querySelector('#headerName')
    card_Name.innerText = responseCards.data[22].card_names

    const card_keyUp = document.querySelector('#key-Up')
    card_keyUp.innerText = responseCards.data[22].date
    const card_keyRev = document.querySelector('#key-rev')
    card_keyRev.innerText = responseCards.data[22].intention
    const card_meaningUp = document.querySelector('#meaning-Up')
    card_meaningUp.innerText = responseCards.data[22].layout

    
}
getData()