console.log('working')

const getData = async () => {
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const pentacles_Suit = document.querySelector('#suitName')
    pentacles_Suit.innerText = responseCards.data[64].suit

    const pentaclesA_img = document.querySelector('#card1-imgUp')
    pentaclesA_img.src = responseCards.data[64].up_img
    const pentaclesA_Name = document.querySelector('#card1-Name')
    pentaclesA_Name.innerText = responseCards.data[64].name
    const pentaclesA_elementIcon = document.querySelector('#card1-imgUp')
    pentaclesA_elementIcon.src = responseCards.data[64].element_icon
    const pentaclesA_planetIcon = document.querySelector('#card1-imgUp')
    pentaclesA_planetIcon.src = responseCards.data[64].planet_icon
    const pentaclesA_astroIcon = document.querySelector('#card1-imgUp')
    pentaclesA_astroIcon.src = responseCards.data[64].astro_icon
    const pentaclesA_keyUp = document.querySelector('#card1-keyUp')
    pentaclesA_keyUp.innerText = responseCards.data[64].up_key
    const pentaclesA_keyRev = document.querySelector('#card1-keyUp')
    pentaclesA_keyRev.innerText = responseCards.data[64].rev_keys
    // const pentaclessA_Explore = document.querySelector('#card1-explore')

    const pentacles2_img = document.querySelector('#card2-imgUp')
    pentacles2_img.src = responseCards.data[65].up_img
    const pentacles2_Name = document.querySelector('#card2-name')
    pentacles2_Name.innerText = responseCards.data[65].name
    const pentacles2_elementIcon = document.querySelector('#card2-imgUp')
    pentacles2_elementIcon.src = responseCards.data[65].element_icon
    const pentacles2_planetIcon = document.querySelector('#card2-imgUp')
    pentacles2_planetIcon.src = responseCards.data[65].planet_icon
    const pentacles2_astroIcon = document.querySelector('#card2-imgUp')
    pentacles2_astroIcon.src = responseCards.data[65].astro_icon
    const pentacles2_keyUp = document.querySelector('#card2-keyUp')
    pentacles2_keyUp.innerText = responseCards.data[65].up_key
    const pentacles2_keyRev = document.querySelector('#card2-keyUp')
    pentacles2_keyRev.innerText = responseCards.data[65].rev_keys
    // const card2Explore = document.querySelector('#card2-explore')

    const pentacles3_img = document.querySelector('#card3-imgUp')
    pentacles3_img.src = responseCards.data[66].up_img
    const pentacles3_Name = document.querySelector('#card3-name')
    pentacles3_Name.innerText = responseCards.data[66].name
    const pentacles3_elementIcon = document.querySelector('#card3-imgUp')
    pentacles3_elementIcon.src = responseCards.data[66].element_icon
    const pentacles3_planetIcon = document.querySelector('#card3-imgUp')
    pentacles3_planetIcon.src = responseCards.data[66].planet_icon
    const pentacles3_astroIcon = document.querySelector('#card3-imgUp')
    pentacles3_astroIcon.src = responseCards.data[66].astro_icon
    const pentacles3_keyUp = document.querySelector('#card3-keyUp')
    pentacles3_keyUp.innerText = responseCards.data[66].up_key
    const pentacles3_keyRev = document.querySelector('#card3-keyUp')
    pentacles3_keyRev.innerText = responseCards.data[66].rev_keys
    // const card3Explore = document.querySelector('#card3-explore')

    const pentacles4_img = document.querySelector('#card4-imgUp')
    pentacles4_img.src = responseCards.data[67].up_img
    const pentacles4_Name = document.querySelector('#card4-name')
    pentacles4_Name.innerText = responseCards.data[67].name
    const pentacles4_elementIcon = document.querySelector('#card4-imgUp')
    pentacles4_elementIcon.src = responseCards.data[67].element_icon
    const pentacles4_planetIcon = document.querySelector('#card4-imgUp')
    pentacles4_planetIcon.src = responseCards.data[67].planet_icon
    const pentacles4_astroIcon = document.querySelector('#card4-imgUp')
    pentacles4_astroIcon.src = responseCards.data[67].astro_icon
    const pentacles4_keyUp = document.querySelector('#card4-keyUp')
    pentacles4_keyUp.innerText = responseCards.data[67].up_key
    const pentacles4_keyRev = document.querySelector('#card4-keyUp')
    pentacles4_keyRev.innerText = responseCards.data[67].rev_keys
    // const card4Explore = document.querySelector('#card4-explore')

    const pentacles5_img = document.querySelector('#card5-imgUp')
    pentacles5_img.src = responseCards.data[68].up_img
    const pentacles5_Name = document.querySelector('#card5-name')
    pentacles5_Name.innerText = responseCards.data[68].name
    const pentacles5_elementIcon = document.querySelector('#card5-imgUp')
    pentacles5_elementIcon.src = responseCards.data[68].element_icon
    const pentacles5_planetIcon = document.querySelector('#card5-imgUp')
    pentacles5_planetIcon.src = responseCards.data[68].planet_icon
    const pentacles5_astroIcon = document.querySelector('#card5-imgUp')
    pentacles5_astroIcon.src = responseCards.data[68].astro_icon
    const pentacles5_keyUp = document.querySelector('#card5-keyUp')
    pentacles5_keyUp.innerText = responseCards.data[68].up_key
    const pentacles5_keyRev = document.querySelector('#card5-keyUp')
    pentacles5_keyRev.innerText = responseCards.data[68].rev_keys
    // const card5Explore = document.querySelector('#card5-explore')

    const pentacles6_img = document.querySelector('#card6-imgUp')
    pentacles6_img.src = responseCards.data[69].up_img
    const pentacles6_Name = document.querySelector('#card6-name')
    pentacles6_Name.innerText = responseCards.data[69].name
    const pentacles6_elementIcon = document.querySelector('#card6-imgUp')
    pentacles6_elementIcon.src = responseCards.data[69].element_icon
    const pentacles6_planetIcon = document.querySelector('#card6-imgUp')
    pentacles6_planetIcon.src = responseCards.data[69].planet_icon
    const pentacles6_astroIcon = document.querySelector('#card6-imgUp')
    pentacles6_astroIcon.src = responseCards.data[69].astro_icon
    const pentacles6_keyUp = document.querySelector('#card6-keyUp')
    pentacles6_keyUp.innerText = responseCards.data[69].up_key
    const pentacles6_keyRev = document.querySelector('#card6-keyUp')
    pentacles6_keyRev.innerText = responseCards.data[69].rev_keys
    // const card6Explore = document.querySelector('#card6-explore')

    const pentacles7_img = document.querySelector('#card7-imgUp')
    pentacles7_img.src = responseCards.data[70].up_img
    const pentacles7_Name = document.querySelector('#card7-name')
    pentacles7_Name.innerText = responseCards.data[70].name
    const pentacles7_elementIcon = document.querySelector('#card7-imgUp')
    pentacles7_elementIcon.src = responseCards.data[70].element_icon
    const pentacles7_planetIcon = document.querySelector('#card7-imgUp')
    pentacles7_planetIcon.src = responseCards.data[70].planet_icon
    const pentacles7_astroIcon = document.querySelector('#card7-imgUp')
    pentacles7_astroIcon.src = responseCards.data[70].astro_icon
    const pentacles7_keyUp = document.querySelector('#card7-keyUp')
    pentacles7_keyUp.innerText = responseCards.data[70].up_key
    const pentacles7_keyRev = document.querySelector('#card7-keyUp')
    pentacles7_keyRev.innerText = responseCards.data[70].rev_keys
    // const card7Explore = document.querySelector('#card7-explore')

    const pentacles8_img = document.querySelector('#card8-imgUp')
    pentacles8_img.src = responseCards.data[71].up_img
    const pentacles8_Name = document.querySelector('#card8-name')
    pentacles8_Name.innerText = responseCards.data[71].name
    const pentacles8_elementIcon = document.querySelector('#card8-imgUp')
    pentacles8_elementIcon.src = responseCards.data[71].element_icon
    const pentacles8_planetIcon = document.querySelector('#card8-imgUp')
    pentacles8_planetIcon.src = responseCards.data[71].planet_icon
    const pentacles8_astroIcon = document.querySelector('#card8-imgUp')
    pentacles8_astroIcon.src = responseCards.data[71].astro_icon
    const pentacles8_keyUp = document.querySelector('#card8-keyUp')
    pentacles8_keyUp.innerText = responseCards.data[71].up_key
    const pentacles8_keyRev = document.querySelector('#card8-keyUp')
    pentacles8_keyRev.innerText = responseCards.data[71].rev_keys
    // const card8Explore = document.querySelector('#card8-explore')

    const pentacles9_img = document.querySelector('#card9-imgUp')
    pentacles9_img.src = responseCards.data[72].up_img
    const pentacles9_Name = document.querySelector('#card9-name')
    pentacles9_Name.innerText = responseCards.data[72].name
    const pentacles9_elementIcon = document.querySelector('#card9-imgUp')
    pentacles9_elementIcon.src = responseCards.data[72].element_icon
    const pentacles9_planetIcon = document.querySelector('#card9-imgUp')
    pentacles9_planetIcon.src = responseCards.data[72].planet_icon
    const pentacles9_astroIcon = document.querySelector('#card9-imgUp')
    pentacles9_astroIcon.src = responseCards.data[72].astro_icon
    const pentacles9_keyUp = document.querySelector('#card9-keyUp')
    pentacles9_keyUp.innerText = responseCards.data[72].up_key
    const pentacles9_keyRev = document.querySelector('#card9-keyUp')
    pentacles9_keyRev.innerText = responseCards.data[72].rev_keys
    // const card9Explore = document.querySelector('#card9-explore')

    const pentacles10_img = document.querySelector('#card10-imgUp')
    pentacles10_img.src = responseCards.data[73].up_img
    const pentacles10_Name = document.querySelector('#card10-name')
    pentacles10_Name.innerText = responseCards.data[73].name
    const pentacles10_elementIcon = document.querySelector('#card10-imgUp')
    pentacles10_elementIcon.src = responseCards.data[73].element_icon
    const pentacles10_planetIcon = document.querySelector('#card10-imgUp')
    pentacles10_planetIcon.src = responseCards.data[73].planet_icon
    const pentacles10_astroIcon = document.querySelector('#card10-imgUp')
    pentacles10_astroIcon.src = responseCards.data[73].astro_icon
    const pentacles10_keyUp = document.querySelector('#card10-keyUp')
    pentacles10_keyUp.innerText = responseCards.data[73].up_key
    const pentacles10_keyRev = document.querySelector('#card10-keyUp')
    pentacles10_keyRev.innerText = responseCards.data[73].rev_keys
    // const card10Explore = document.querySelector('#card10-explore')

    const pentaclesP_img = document.querySelector('#card11-imgUp')
    pentaclesP_img.src = responseCards.data[74].up_img
    const pentaclesP_Name = document.querySelector('#card11-name')
    pentaclesP_Name.innerText = responseCards.data[74].name
    const pentaclesP_elementIcon = document.querySelector('#card11-imgUp')
    pentaclesP_elementIcon.src = responseCards.data[74].element_icon
    const pentaclesP_planetIcon = document.querySelector('#card11-imgUp')
    pentaclesP_planetIcon.src = responseCards.data[74].planet_icon
    const pentaclesP_astroIcon = document.querySelector('#card11-imgUp')
    pentaclesP_astroIcon.src = responseCards.data[74].astro_icon
    const pentaclesP_keyUp = document.querySelector('#card11-keyUp')
    pentaclesP_keyUp.innerText = responseCards.data[74].up_key
    const pentaclesP_keyRev = document.querySelector('#card11-keyUp')
    pentaclesP_keyRev.innerText = responseCards.data[74].rev_keys
    // const card11Explore = document.querySelector('#card11-explore')

    const pentaclesKn_img = document.querySelector('#card12-imgUp')
    pentaclesKn_img.src = responseCards.data[75].up_img
    const pentaclesKn_Name = document.querySelector('#card12-name')
    pentaclesKn_Name.innerText = responseCards.data[75].name
    const pentaclesKn_elementIcon = document.querySelector('#card12-imgUp')
    pentaclesKn_elementIcon.src = responseCards.data[75].element_icon
    const pentaclesKn_planetIcon = document.querySelector('#card12-imgUp')
    pentaclesKn_planetIcon.src = responseCards.data[75].planet_icon
    const pentaclesKn_astroIcon = document.querySelector('#card12-imgUp')
    pentaclesKn_astroIcon.src = responseCards.data[75].astro_icon
    const pentaclesKn_keyUp = document.querySelector('#card12-keyUp')
    pentaclesKn_keyUp.innerText = responseCards.data[75].up_key
    const pentaclesKn_keyRev = document.querySelector('#card12-keyUp')
    pentaclesKn_keyRev.innerText = responseCards.data[75].rev_keys
    // const card12Explore = document.querySelector('#card12-explore')

    const pentaclesQ_img = document.querySelector('#card13-imgUp')
    pentaclesQ_img.src = responseCards.data[76].up_img
    const pentaclesQ_Name = document.querySelector('#card13-name')
    pentaclesQ_Name.innerText = responseCards.data[76].name
    const pentaclesQ_elementIcon = document.querySelector('#card13-imgUp')
    pentaclesQ_elementIcon.src = responseCards.data[76].element_icon
    const pentaclesQ_planetIcon = document.querySelector('#card13-imgUp')
    pentaclesQ_planetIcon.src = responseCards.data[76].planet_icon
    const pentaclesQ_astroIcon = document.querySelector('#card13-imgUp')
    pentaclesQ_astroIcon.src = responseCards.data[76].astro_icon
    const pentaclesQ_keyUp = document.querySelector('#card13-keyUp')
    pentaclesQ_keyUp.innerText = responseCards.data[76].up_key
    const pentaclesQ_keyRev = document.querySelector('#card13-keyUp')
    pentaclesQ_keyRev.innerText = responseCards.data[76].rev_keys
    // const card13Explore = document.querySelector('#card13-explore')

    const pentaclesKi_img = document.querySelector('#card14-imgUp')
    pentaclesKi_img.src = responseCards.data[77].up_img
    const pentaclesKi_Name = document.querySelector('#card14-name')
    pentaclesKi_Name.innerText = responseCards.data[77].name
    const pentaclesKi_elementIcon = document.querySelector('#card14-imgUp')
    pentaclesKi_elementIcon.src = responseCards.data[77].element_icon
    const pentaclesKi_planetIcon = document.querySelector('#card14-imgUp')
    pentaclesKi_planetIcon.src = responseCards.data[77].planet_icon
    const pentaclesKi_astroIcon = document.querySelector('#card14-imgUp')
    pentaclesKi_astroIcon.src = responseCards.data[77].astro_icon
    const pentaclesKi_keyUp = document.querySelector('#card14-keyUp')
    pentaclesKi_keyUp.innerText = responseCards.data[77].up_key
    const pentaclesKi_keyRev = document.querySelector('#card14-keyUp')
    pentaclesKi_keyRev.innerText = responseCards.data[77].rev_keys
    // const card14Explore = document.querySelector('#card14-explore')

    
}

getData()

const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "index.html"
})
const userPage = document.querySelector('#user-Img')
userPage.addEventListener('click', () => {
    // Move to User page
    window.location.href = "userPage.html"
})