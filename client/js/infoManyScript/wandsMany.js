console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[0].img   
   
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const wands_Suit = document.querySelector('#suitName')
    wands_Suit.innerText = responseCards.data[22].suit

    const wandsA_img = document.querySelector('#card1-imgUp')
    wandsA_img.src = responseCards.data[22].up_img
    const wandsA_Name = document.querySelector('#card1-Name')
    wandsA_Name.innerText = responseCards.data[22].name
    const wandsA_elementIcon = document.querySelector('#card1-imgUp')
    wandsA_elementIcon.src = responseCards.data[22].element_icon
    const wandsA_planetIcon = document.querySelector('#card1-imgUp')
    wandsA_planetIcon.src = responseCards.data[22].planet_icon
    const wandsA_astroIcon = document.querySelector('#card1-imgUp')
    wandsA_astroIcon.src = responseCards.data[22].astro_icon
    const wandsA_keyUp = document.querySelector('#card1-keyUp')
    wandsA_keyUp.innerText = responseCards.data[22].up_key
    const wandsA_keyRev = document.querySelector('#card1-keyUp')
    wandsA_keyRev.innerText = responseCards.data[22].rev_key
    // const wandssA_Explore = document.querySelector('#card1-explore')

    const wands2_img = document.querySelector('#card2-imgUp')
    wands2_img.src = responseCards.data[23].up_img
    const wands2_Name = document.querySelector('#card2-name')
    wands2_Name.innerText = responseCards.data[23].name
    const wands2_elementIcon = document.querySelector('#card2-imgUp')
    wands2_elementIcon.src = responseCards.data[23].element_icon
    const wands2_planetIcon = document.querySelector('#card2-imgUp')
    wands2_planetIcon.src = responseCards.data[23].planet_icon
    const wands2_astroIcon = document.querySelector('#card2-imgUp')
    wands2_astroIcon.src = responseCards.data[23].astro_icon
    const wands2_keyUp = document.querySelector('#card2-keyUp')
    wands2_keyUp.innerText = responseCards.data[23].up_key
    const wands2_keyRev = document.querySelector('#card2-keyUp')
    wands2_keyRev.innerText = responseCards.data[23].rev_key
    // const card2Explore = document.querySelector('#card2-explore')

    const wands3_img = document.querySelector('#card3-imgUp')
    wands3_img.src = responseCards.data[24].up_img
    const wands3_Name = document.querySelector('#card3-name')
    wands3_Name.innerText = responseCards.data[24].name
    const wands3_elementIcon = document.querySelector('#card3-imgUp')
    wands3_elementIcon.src = responseCards.data[24].element_icon
    const wands3_planetIcon = document.querySelector('#card3-imgUp')
    wands3_planetIcon.src = responseCards.data[24].planet_icon
    const wands3_astroIcon = document.querySelector('#card3-imgUp')
    wands3_astroIcon.src = responseCards.data[24].astro_icon
    const wands3_keyUp = document.querySelector('#card3-keyUp')
    wands3_keyUp.innerText = responseCards.data[24].up_key
    const wands3_keyRev = document.querySelector('#card3-keyUp')
    wands3_keyRev.innerText = responseCards.data[24].rev_key
    // const card3Explore = document.querySelector('#card3-explore')

    const wands4_img = document.querySelector('#card4-imgUp')
    wands4_img.src = responseCards.data[25].up_img
    const wands4_Name = document.querySelector('#card4-name')
    wands4_Name.innerText = responseCards.data[25].name
    const wands4_elementIcon = document.querySelector('#card4-imgUp')
    wands4_elementIcon.src = responseCards.data[25].element_icon
    const wands4_planetIcon = document.querySelector('#card4-imgUp')
    wands4_planetIcon.src = responseCards.data[25].planet_icon
    const wands4_astroIcon = document.querySelector('#card4-imgUp')
    wands4_astroIcon.src = responseCards.data[25].astro_icon
    const wands4_keyUp = document.querySelector('#card4-keyUp')
    wands4_keyUp.innerText = responseCards.data[25].up_key
    const wands4_keyRev = document.querySelector('#card4-keyUp')
    wands4_keyRev.innerText = responseCards.data[25].rev_key
    // const card4Explore = document.querySelector('#card4-explore')

    const wands5_img = document.querySelector('#card5-imgUp')
    wands5_img.src = responseCards.data[26].up_img
    const wands5_Name = document.querySelector('#card5-name')
    wands5_Name.innerText = responseCards.data[26].name
    const wands5_elementIcon = document.querySelector('#card5-imgUp')
    wands5_elementIcon.src = responseCards.data[26].element_icon
    const wands5_planetIcon = document.querySelector('#card5-imgUp')
    wands5_planetIcon.src = responseCards.data[26].planet_icon
    const wands5_astroIcon = document.querySelector('#card5-imgUp')
    wands5_astroIcon.src = responseCards.data[26].astro_icon
    const wands5_keyUp = document.querySelector('#card5-keyUp')
    wands5_keyUp.innerText = responseCards.data[26].up_key
    const wands5_keyRev = document.querySelector('#card5-keyUp')
    wands5_keyRev.innerText = responseCards.data[26].rev_key
    // const card5Explore = document.querySelector('#card5-explore')

    const wands6_img = document.querySelector('#card6-imgUp')
    wands6_img.src = responseCards.data[27].up_img
    const wands6_Name = document.querySelector('#card6-name')
    wands6_Name.innerText = responseCards.data[27].name
    const wands6_elementIcon = document.querySelector('#card6-imgUp')
    wands6_elementIcon.src = responseCards.data[27].element_icon
    const wands6_planetIcon = document.querySelector('#card6-imgUp')
    wands6_planetIcon.src = responseCards.data[27].planet_icon
    const wands6_astroIcon = document.querySelector('#card6-imgUp')
    wands6_astroIcon.src = responseCards.data[27].astro_icon
    const wands6_keyUp = document.querySelector('#card6-keyUp')
    wands6_keyUp.innerText = responseCards.data[27].up_key
    const wands6_keyRev = document.querySelector('#card6-keyUp')
    wands6_keyRev.innerText = responseCards.data[27].rev_key
    // const card6Explore = document.querySelector('#card6-explore')

    const wands7_img = document.querySelector('#card7-imgUp')
    wands7_img.src = responseCards.data[28].up_img
    const wands7_Name = document.querySelector('#card7-name')
    wands7_Name.innerText = responseCards.data[28].name
    const wands7_elementIcon = document.querySelector('#card7-imgUp')
    wands7_elementIcon.src = responseCards.data[28].element_icon
    const wands7_planetIcon = document.querySelector('#card7-imgUp')
    wands7_planetIcon.src = responseCards.data[28].planet_icon
    const wands7_astroIcon = document.querySelector('#card7-imgUp')
    wands7_astroIcon.src = responseCards.data[28].astro_icon
    const wands7_keyUp = document.querySelector('#card7-keyUp')
    wands7_keyUp.innerText = responseCards.data[28].up_key
    const wands7_keyRev = document.querySelector('#card7-keyUp')
    wands7_keyRev.innerText = responseCards.data[28].rev_key
    // const card7Explore = document.querySelector('#card7-explore')

    const wands8_img = document.querySelector('#card8-imgUp')
    wands8_img.src = responseCards.data[29].up_img
    const wands8_Name = document.querySelector('#card8-name')
    wands8_Name.innerText = responseCards.data[29].name
    const wands8_elementIcon = document.querySelector('#card8-imgUp')
    wands8_elementIcon.src = responseCards.data[29].element_icon
    const wands8_planetIcon = document.querySelector('#card8-imgUp')
    wands8_planetIcon.src = responseCards.data[29].planet_icon
    const wands8_astroIcon = document.querySelector('#card8-imgUp')
    wands8_astroIcon.src = responseCards.data[29].astro_icon
    const wands8_keyUp = document.querySelector('#card8-keyUp')
    wands8_keyUp.innerText = responseCards.data[29].up_key
    const wands8_keyRev = document.querySelector('#card8-keyUp')
    wands8_keyRev.innerText = responseCards.data[29].rev_key
    // const card8Explore = document.querySelector('#card8-explore')

    const wands9_img = document.querySelector('#card9-imgUp')
    wands9_img.src = responseCards.data[30].up_img
    const wands9_Name = document.querySelector('#card9-name')
    wands9_Name.innerText = responseCards.data[30].name
    const wands9_elementIcon = document.querySelector('#card9-imgUp')
    wands9_elementIcon.src = responseCards.data[30].element_icon
    const wands9_planetIcon = document.querySelector('#card9-imgUp')
    wands9_planetIcon.src = responseCards.data[30].planet_icon
    const wands9_astroIcon = document.querySelector('#card9-imgUp')
    wands9_astroIcon.src = responseCards.data[30].astro_icon
    const wands9_keyUp = document.querySelector('#card9-keyUp')
    wands9_keyUp.innerText = responseCards.data[30].up_key
    const wands9_keyRev = document.querySelector('#card9-keyUp')
    wands9_keyRev.innerText = responseCards.data[30].rev_key
    // const card9Explore = document.querySelector('#card9-explore')

    const wands10_img = document.querySelector('#card10-imgUp')
    wands10_img.src = responseCards.data[31].up_img
    const wands10_Name = document.querySelector('#card10-name')
    wands10_Name.innerText = responseCards.data[31].name
    const wands10_elementIcon = document.querySelector('#card10-imgUp')
    wands10_elementIcon.src = responseCards.data[31].element_icon
    const wands10_planetIcon = document.querySelector('#card10-imgUp')
    wands10_planetIcon.src = responseCards.data[31].planet_icon
    const wands10_astroIcon = document.querySelector('#card10-imgUp')
    wands10_astroIcon.src = responseCards.data[31].astro_icon
    const wands10_keyUp = document.querySelector('#card10-keyUp')
    wands10_keyUp.innerText = responseCards.data[31].up_key
    const wands10_keyRev = document.querySelector('#card10-keyUp')
    wands10_keyRev.innerText = responseCards.data[31].rev_key
    // const card10Explore = document.querySelector('#card10-explore')

    const wandsP_img = document.querySelector('#card11-imgUp')
    wandsP_img.src = responseCards.data[32].up_img
    const wandsP_Name = document.querySelector('#card11-name')
    wandsP_Name.innerText = responseCards.data[32].name
    const wandsP_elementIcon = document.querySelector('#card11-imgUp')
    wandsP_elementIcon.src = responseCards.data[32].element_icon
    const wandsP_planetIcon = document.querySelector('#card11-imgUp')
    wandsP_planetIcon.src = responseCards.data[32].planet_icon
    const wandsP_astroIcon = document.querySelector('#card11-imgUp')
    wandsP_astroIcon.src = responseCards.data[32].astro_icon
    const wandsP_keyUp = document.querySelector('#card11-keyUp')
    wandsP_keyUp.innerText = responseCards.data[32].up_key
    const wandsP_keyRev = document.querySelector('#card11-keyUp')
    wandsP_keyRev.innerText = responseCards.data[32].rev_key
    // const card11Explore = document.querySelector('#card11-explore')

    const wandsKn_img = document.querySelector('#card12-imgUp')
    wandsKn_img.src = responseCards.data[33].up_img
    const wandsKn_Name = document.querySelector('#card12-name')
    wandsKn_Name.innerText = responseCards.data[33].name
    const wandsKn_elementIcon = document.querySelector('#card12-imgUp')
    wandsKn_elementIcon.src = responseCards.data[33].element_icon
    const wandsKn_planetIcon = document.querySelector('#card12-imgUp')
    wandsKn_planetIcon.src = responseCards.data[33].planet_icon
    const wandsKn_astroIcon = document.querySelector('#card12-imgUp')
    wandsKn_astroIcon.src = responseCards.data[33].astro_icon
    const wandsKn_keyUp = document.querySelector('#card12-keyUp')
    wandsKn_keyUp.innerText = responseCards.data[33].up_key
    const wandsKn_keyRev = document.querySelector('#card12-keyUp')
    wandsKn_keyRev.innerText = responseCards.data[33].rev_key
    // const card12Explore = document.querySelector('#card12-explore')

    const wandsQ_img = document.querySelector('#card13-imgUp')
    wandsQ_img.src = responseCards.data[34].up_img
    const wandsQ_Name = document.querySelector('#card13-name')
    wandsQ_Name.innerText = responseCards.data[34].name
    const wandsQ_elementIcon = document.querySelector('#card13-imgUp')
    wandsQ_elementIcon.src = responseCards.data[34].element_icon
    const wandsQ_planetIcon = document.querySelector('#card13-imgUp')
    wandsQ_planetIcon.src = responseCards.data[34].planet_icon
    const wandsQ_astroIcon = document.querySelector('#card13-imgUp')
    wandsQ_astroIcon.src = responseCards.data[34].astro_icon
    const wandsQ_keyUp = document.querySelector('#card13-keyUp')
    wandsQ_keyUp.innerText = responseCards.data[34].up_key
    const wandsQ_keyRev = document.querySelector('#card13-keyUp')
    wandsQ_keyRev.innerText = responseCards.data[34].rev_key
    // const card13Explore = document.querySelector('#card13-explore')

    const wandsKi_img = document.querySelector('#card14-imgUp')
    wandsKi_img.src = responseCards.data[35].up_img
    const wandsKi_Name = document.querySelector('#card14-name')
    wandsKi_Name.innerText = responseCards.data[35].name
    const wandsKi_elementIcon = document.querySelector('#card14-imgUp')
    wandsKi_elementIcon.src = responseCards.data[35].element_icon
    const wandsKi_planetIcon = document.querySelector('#card14-imgUp')
    wandsKi_planetIcon.src = responseCards.data[35].planet_icon
    const wandsKi_astroIcon = document.querySelector('#card14-imgUp')
    wandsKi_astroIcon.src = responseCards.data[35].astro_icon
    const wandsKi_keyUp = document.querySelector('#card14-keyUp')
    wandsKi_keyUp.innerText = responseCards.data[35].up_key
    const wandsKi_keyRev = document.querySelector('#card14-keyUp')
    wandsKi_keyRev.innerText = responseCards.data[35].rev_key
    // const card14Explore = document.querySelector('#card14-explore')

    
}
getData()

const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', () => {
    // Move back to Explore page
    window.location.href = "explorePage.html"
})