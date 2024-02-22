console.log('working')

const getData = async () => {

    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[0].img   
    
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const cups_Suit = document.querySelector('#suitName')
    cups_Suit.innerText = responseCards.data[50].suit

    const cupsA_img = document.querySelector('#card1-imgUp')
    cupsA_img.src = responseCards.data[50].up_img
    const cupsA_Name = document.querySelector('#card1-Name')
    cupsA_Name.innerText = responseCards.data[50].name
    const cupsA_elementIcon = document.querySelector('#card1-imgUp')
    cupsA_elementIcon.src = responseCards.data[50].element_icon
    const cupsA_planetIcon = document.querySelector('#card1-imgUp')
    cupsA_planetIcon.src = responseCards.data[50].planet_icon
    const cupsA_astroIcon = document.querySelector('#card1-imgUp')
    cupsA_astroIcon.src = responseCards.data[50].astro_icon
    const cupsA_keyUp = document.querySelector('#card1-keyUp')
    cupsA_keyUp.innerText = responseCards.data[50].up_key
    const cupsA_keyRev = document.querySelector('#card1-keyUp')
    cupsA_keyRev.innerText = responseCards.data[50].rev_keys
    // const cupssA_Explore = document.querySelector('#card1-explore')

    const cups2_img = document.querySelector('#card2-imgUp')
    cups2_img.src = responseCards.data[51].up_img
    const cups2_Name = document.querySelector('#card2-name')
    cups2_Name.innerText = responseCards.data[51].name
    const cups2_elementIcon = document.querySelector('#card2-imgUp')
    cups2_elementIcon.src = responseCards.data[51].element_icon
    const cups2_planetIcon = document.querySelector('#card2-imgUp')
    cups2_planetIcon.src = responseCards.data[51].planet_icon
    const cups2_astroIcon = document.querySelector('#card2-imgUp')
    cups2_astroIcon.src = responseCards.data[51].astro_icon
    const cups2_keyUp = document.querySelector('#card2-keyUp')
    cups2_keyUp.innerText = responseCards.data[51].up_key
    const cups2_keyRev = document.querySelector('#card2-keyUp')
    cups2_keyRev.innerText = responseCards.data[51].rev_keys
    // const card2Explore = document.querySelector('#card2-explore')

    const cups3_img = document.querySelector('#card3-imgUp')
    cups3_img.src = responseCards.data[52].up_img
    const cups3_Name = document.querySelector('#card3-name')
    cups3_Name.innerText = responseCards.data[52].name
    const cups3_elementIcon = document.querySelector('#card3-imgUp')
    cups3_elementIcon.src = responseCards.data[52].element_icon
    const cups3_planetIcon = document.querySelector('#card3-imgUp')
    cups3_planetIcon.src = responseCards.data[52].planet_icon
    const cups3_astroIcon = document.querySelector('#card3-imgUp')
    cups3_astroIcon.src = responseCards.data[52].astro_icon
    const cups3_keyUp = document.querySelector('#card3-keyUp')
    cups3_keyUp.innerText = responseCards.data[52].up_key
    const cups3_keyRev = document.querySelector('#card3-keyUp')
    cups3_keyRev.innerText = responseCards.data[52].rev_keys
    // const card3Explore = document.querySelector('#card3-explore')

    const cups4_img = document.querySelector('#card4-imgUp')
    cups4_img.src = responseCards.data[53].up_img
    const cups4_Name = document.querySelector('#card4-name')
    cups4_Name.innerText = responseCards.data[53].name
    const cups4_elementIcon = document.querySelector('#card4-imgUp')
    cups4_elementIcon.src = responseCards.data[53].element_icon
    const cups4_planetIcon = document.querySelector('#card4-imgUp')
    cups4_planetIcon.src = responseCards.data[53].planet_icon
    const cups4_astroIcon = document.querySelector('#card4-imgUp')
    cups4_astroIcon.src = responseCards.data[53].astro_icon
    const cups4_keyUp = document.querySelector('#card4-keyUp')
    cups4_keyUp.innerText = responseCards.data[53].up_key
    const cups4_keyRev = document.querySelector('#card4-keyUp')
    cups4_keyRev.innerText = responseCards.data[53].rev_keys
    // const card4Explore = document.querySelector('#card4-explore')

    const cups5_img = document.querySelector('#card5-imgUp')
    cups5_img.src = responseCards.data[54].up_img
    const cups5_Name = document.querySelector('#card5-name')
    cups5_Name.innerText = responseCards.data[54].name
    const cups5_elementIcon = document.querySelector('#card5-imgUp')
    cups5_elementIcon.src = responseCards.data[54].element_icon
    const cups5_planetIcon = document.querySelector('#card5-imgUp')
    cups5_planetIcon.src = responseCards.data[54].planet_icon
    const cups5_astroIcon = document.querySelector('#card5-imgUp')
    cups5_astroIcon.src = responseCards.data[54].astro_icon
    const cups5_keyUp = document.querySelector('#card5-keyUp')
    cups5_keyUp.innerText = responseCards.data[54].up_key
    const cups5_keyRev = document.querySelector('#card5-keyUp')
    cups5_keyRev.innerText = responseCards.data[54].rev_keys
    // const card5Explore = document.querySelector('#card5-explore')

    const cups6_img = document.querySelector('#card6-imgUp')
    cups6_img.src = responseCards.data[55].up_img
    const cups6_Name = document.querySelector('#card6-name')
    cups6_Name.innerText = responseCards.data[55].name
    const cups6_elementIcon = document.querySelector('#card6-imgUp')
    cups6_elementIcon.src = responseCards.data[55].element_icon
    const cups6_planetIcon = document.querySelector('#card6-imgUp')
    cups6_planetIcon.src = responseCards.data[55].planet_icon
    const cups6_astroIcon = document.querySelector('#card6-imgUp')
    cups6_astroIcon.src = responseCards.data[55].astro_icon
    const cups6_keyUp = document.querySelector('#card6-keyUp')
    cups6_keyUp.innerText = responseCards.data[55].up_key
    const cups6_keyRev = document.querySelector('#card6-keyUp')
    cups6_keyRev.innerText = responseCards.data[55].rev_keys
    // const card6Explore = document.querySelector('#card6-explore')

    const cups7_img = document.querySelector('#card7-imgUp')
    cups7_img.src = responseCards.data[56].up_img
    const cups7_Name = document.querySelector('#card7-name')
    cups7_Name.innerText = responseCards.data[56].name
    const cups7_elementIcon = document.querySelector('#card7-imgUp')
    cups7_elementIcon.src = responseCards.data[56].element_icon
    const cups7_planetIcon = document.querySelector('#card7-imgUp')
    cups7_planetIcon.src = responseCards.data[56].planet_icon
    const cups7_astroIcon = document.querySelector('#card7-imgUp')
    cups7_astroIcon.src = responseCards.data[56].astro_icon
    const cups7_keyUp = document.querySelector('#card7-keyUp')
    cups7_keyUp.innerText = responseCards.data[56].up_key
    const cups7_keyRev = document.querySelector('#card7-keyUp')
    cups7_keyRev.innerText = responseCards.data[56].rev_keys
    // const card7Explore = document.querySelector('#card7-explore')

    const cups8_img = document.querySelector('#card8-imgUp')
    cups8_img.src = responseCards.data[57].up_img
    const cups8_Name = document.querySelector('#card8-name')
    cups8_Name.innerText = responseCards.data[57].name
    const cups8_elementIcon = document.querySelector('#card8-imgUp')
    cups8_elementIcon.src = responseCards.data[57].element_icon
    const cups8_planetIcon = document.querySelector('#card8-imgUp')
    cups8_planetIcon.src = responseCards.data[57].planet_icon
    const cups8_astroIcon = document.querySelector('#card8-imgUp')
    cups8_astroIcon.src = responseCards.data[57].astro_icon
    const cups8_keyUp = document.querySelector('#card8-keyUp')
    cups8_keyUp.innerText = responseCards.data[57].up_key
    const cups8_keyRev = document.querySelector('#card8-keyUp')
    cups8_keyRev.innerText = responseCards.data[57].rev_keys
    // const card8Explore = document.querySelector('#card8-explore')

    const cups9_img = document.querySelector('#card9-imgUp')
    cups9_img.src = responseCards.data[58].up_img
    const cups9_Name = document.querySelector('#card9-name')
    cups9_Name.innerText = responseCards.data[58].name
    const cups9_elementIcon = document.querySelector('#card9-imgUp')
    cups9_elementIcon.src = responseCards.data[58].element_icon
    const cups9_planetIcon = document.querySelector('#card9-imgUp')
    cups9_planetIcon.src = responseCards.data[58].planet_icon
    const cups9_astroIcon = document.querySelector('#card9-imgUp')
    cups9_astroIcon.src = responseCards.data[58].astro_icon
    const cups9_keyUp = document.querySelector('#card9-keyUp')
    cups9_keyUp.innerText = responseCards.data[58].up_key
    const cups9_keyRev = document.querySelector('#card9-keyUp')
    cups9_keyRev.innerText = responseCards.data[58].rev_keys
    // const card9Explore = document.querySelector('#card9-explore')

    const cups10_img = document.querySelector('#card10-imgUp')
    cups10_img.src = responseCards.data[59].up_img
    const cups10_Name = document.querySelector('#card10-name')
    cups10_Name.innerText = responseCards.data[59].name
    const cups10_elementIcon = document.querySelector('#card10-imgUp')
    cups10_elementIcon.src = responseCards.data[59].element_icon
    const cups10_planetIcon = document.querySelector('#card10-imgUp')
    cups10_planetIcon.src = responseCards.data[59].planet_icon
    const cups10_astroIcon = document.querySelector('#card10-imgUp')
    cups10_astroIcon.src = responseCards.data[59].astro_icon
    const cups10_keyUp = document.querySelector('#card10-keyUp')
    cups10_keyUp.innerText = responseCards.data[59].up_key
    const cups10_keyRev = document.querySelector('#card10-keyUp')
    cups10_keyRev.innerText = responseCards.data[59].rev_keys
    // const card10Explore = document.querySelector('#card10-explore')

    const cupsP_img = document.querySelector('#card11-imgUp')
    cupsP_img.src = responseCards.data[60].up_img
    const cupsP_Name = document.querySelector('#card11-name')
    cupsP_Name.innerText = responseCards.data[60].name
    const cupsP_elementIcon = document.querySelector('#card11-imgUp')
    cupsP_elementIcon.src = responseCards.data[60].element_icon
    const cupsP_planetIcon = document.querySelector('#card11-imgUp')
    cupsP_planetIcon.src = responseCards.data[60].planet_icon
    const cupsP_astroIcon = document.querySelector('#card11-imgUp')
    cupsP_astroIcon.src = responseCards.data[60].astro_icon
    const cupsP_keyUp = document.querySelector('#card11-keyUp')
    cupsP_keyUp.innerText = responseCards.data[60].up_key
    const cupsP_keyRev = document.querySelector('#card11-keyUp')
    cupsP_keyRev.innerText = responseCards.data[60].rev_keys
    // const card11Explore = document.querySelector('#card11-explore')

    const cupsKn_img = document.querySelector('#card12-imgUp')
    cupsKn_img.src = responseCards.data[61].up_img
    const cupsKn_Name = document.querySelector('#card12-name')
    cupsKn_Name.innerText = responseCards.data[61].name
    const cupsKn_elementIcon = document.querySelector('#card12-imgUp')
    cupsKn_elementIcon.src = responseCards.data[61].element_icon
    const cupsKn_planetIcon = document.querySelector('#card12-imgUp')
    cupsKn_planetIcon.src = responseCards.data[61].planet_icon
    const cupsKn_astroIcon = document.querySelector('#card12-imgUp')
    cupsKn_astroIcon.src = responseCards.data[61].astro_icon
    const cupsKn_keyUp = document.querySelector('#card12-keyUp')
    cupsKn_keyUp.innerText = responseCards.data[61].up_key
    const cupsKn_keyRev = document.querySelector('#card12-keyUp')
    cupsKn_keyRev.innerText = responseCards.data[61].rev_keys
    // const card12Explore = document.querySelector('#card12-explore')

    const cupsQ_img = document.querySelector('#card13-imgUp')
    cupsQ_img.src = responseCards.data[62].up_img
    const cupsQ_Name = document.querySelector('#card13-name')
    cupsQ_Name.innerText = responseCards.data[62].name
    const cupsQ_elementIcon = document.querySelector('#card13-imgUp')
    cupsQ_elementIcon.src = responseCards.data[62].element_icon
    const cupsQ_planetIcon = document.querySelector('#card13-imgUp')
    cupsQ_planetIcon.src = responseCards.data[62].planet_icon
    const cupsQ_astroIcon = document.querySelector('#card13-imgUp')
    cupsQ_astroIcon.src = responseCards.data[62].astro_icon
    const cupsQ_keyUp = document.querySelector('#card13-keyUp')
    cupsQ_keyUp.innerText = responseCards.data[62].up_key
    const cupsQ_keyRev = document.querySelector('#card13-keyUp')
    cupsQ_keyRev.innerText = responseCards.data[62].rev_keys
    // const card13Explore = document.querySelector('#card13-explore')

    const cupsKi_img = document.querySelector('#card14-imgUp')
    cupsKi_img.src = responseCards.data[63].up_img
    const cupsKi_Name = document.querySelector('#card14-name')
    cupsKi_Name.innerText = responseCards.data[63].name
    const cupsKi_elementIcon = document.querySelector('#card14-imgUp')
    cupsKi_elementIcon.src = responseCards.data[63].element_icon
    const cupsKi_planetIcon = document.querySelector('#card14-imgUp')
    cupsKi_planetIcon.src = responseCards.data[63].planet_icon
    const cupsKi_astroIcon = document.querySelector('#card14-imgUp')
    cupsKi_astroIcon.src = responseCards.data[63].astro_icon
    const cupsKi_keyUp = document.querySelector('#card14-keyUp')
    cupsKi_keyUp.innerText = responseCards.data[63].up_key
    const cupsKi_keyRev = document.querySelector('#card14-keyUp')
    cupsKi_keyRev.innerText = responseCards.data[63].rev_keys
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