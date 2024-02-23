console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[2].img   
    
    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    const swords_Suit = document.querySelector('#suitName')
    swords_Suit.innerText = responseCards.data[36].suit

    const swordsA_img = document.querySelector('#card1-imgUp')
    swordsA_img.src = responseCards.data[36].up_img
    const swordsA_Name = document.querySelector('#card1-Name')
    swordsA_Name.innerText = responseCards.data[36].name
    const swordsA_elementIcon = document.querySelector('#card1-imgUp')
    swordsA_elementIcon.innerText = responseCards.data[36].element_icon
    const swordsA_planetIcon = document.querySelector('#card1-imgUp')
    swordsA_planetIcon.innerText = responseCards.data[36].planet_icon
    const swordsA_astroIcon = document.querySelector('#card1-imgUp')
    swordsA_astroIcon.innerText = responseCards.data[36].astro_icon
    const swordsA_keyUp = document.querySelector('#card1-keyUp')
    swordsA_keyUp.innerText = responseCards.data[36].up_key
    const swordsA_keyRev = document.querySelector('#card1-keyUp')
    swordsA_keyRev.innerText = responseCards.data[36].rev_key
    // const swordssA_Explore = document.querySelector('#card1-explore')

    const swords2_img = document.querySelector('#card2-imgUp')
    swords2_img.src = responseCards.data[37].up_img
    const swords2_Name = document.querySelector('#card2-name')
    swords2_Name.innerText = responseCards.data[37].name
    const swords2_elementIcon = document.querySelector('#card2-imgUp')
    swords2_elementIcon.innerText = responseCards.data[37].element_icon
    const swords2_planetIcon = document.querySelector('#card2-imgUp')
    swords2_planetIcon.innerText = responseCards.data[37].planet_icon
    const swords2_astroIcon = document.querySelector('#card2-imgUp')
    swords2_astroIcon.innerText = responseCards.data[37].astro_icon
    const swords2_keyUp = document.querySelector('#card2-keyUp')
    swords2_keyUp.innerText = responseCards.data[37].up_key
    const swords2_keyRev = document.querySelector('#card2-keyUp')
    swords2_keyRev.innerText = responseCards.data[37].rev_key
    // const card2Explore = document.querySelector('#card2-explore')

    const swords3_img = document.querySelector('#card3-imgUp')
    swords3_img.src = responseCards.data[38].up_img
    const swords3_Name = document.querySelector('#card3-name')
    swords3_Name.innerText = responseCards.data[38].name
    const swords3_elementIcon = document.querySelector('#card3-imgUp')
    swords3_elementIcon.innerText = responseCards.data[38].element_icon
    const swords3_planetIcon = document.querySelector('#card3-imgUp')
    swords3_planetIcon.innerText = responseCards.data[38].planet_icon
    const swords3_astroIcon = document.querySelector('#card3-imgUp')
    swords3_astroIcon.innerText = responseCards.data[38].astro_icon
    const swords3_keyUp = document.querySelector('#card3-keyUp')
    swords3_keyUp.innerText = responseCards.data[38].up_key
    const swords3_keyRev = document.querySelector('#card3-keyUp')
    swords3_keyRev.innerText = responseCards.data[38].rev_key
    // const card3Explore = document.querySelector('#card3-explore')

    const swords4_img = document.querySelector('#card4-imgUp')
    swords4_img.src = responseCards.data[39].up_img
    const swords4_Name = document.querySelector('#card4-name')
    swords4_Name.innerText = responseCards.data[39].name
    const swords4_elementIcon = document.querySelector('#card4-imgUp')
    swords4_elementIcon.innerText = responseCards.data[39].element_icon
    const swords4_planetIcon = document.querySelector('#card4-imgUp')
    swords4_planetIcon.innerText = responseCards.data[39].planet_icon
    const swords4_astroIcon = document.querySelector('#card4-imgUp')
    swords4_astroIcon.innerText = responseCards.data[39].astro_icon
    const swords4_keyUp = document.querySelector('#card4-keyUp')
    swords4_keyUp.innerText = responseCards.data[39].up_key
    const swords4_keyRev = document.querySelector('#card4-keyUp')
    swords4_keyRev.innerText = responseCards.data[39].rev_key
    // const card4Explore = document.querySelector('#card4-explore')

    const swords5_img = document.querySelector('#card5-imgUp')
    swords5_img.src = responseCards.data[41].up_img
    const swords5_Name = document.querySelector('#card5-name')
    swords5_Name.innerText = responseCards.data[41].name
    const swords5_elementIcon = document.querySelector('#card5-imgUp')
    swords5_elementIcon.innerText = responseCards.data[41].element_icon
    const swords5_planetIcon = document.querySelector('#card5-imgUp')
    swords5_planetIcon.innerText = responseCards.data[41].planet_icon
    const swords5_astroIcon = document.querySelector('#card5-imgUp')
    swords5_astroIcon.innerText = responseCards.data[41].astro_icon
    const swords5_keyUp = document.querySelector('#card5-keyUp')
    swords5_keyUp.innerText = responseCards.data[41].up_key
    const swords5_keyRev = document.querySelector('#card5-keyUp')
    swords5_keyRev.innerText = responseCards.data[41].rev_key
    // const card5Explore = document.querySelector('#card5-explore')

    const swords6_img = document.querySelector('#card6-imgUp')
    swords6_img.src = responseCards.data[41].up_img
    const swords6_Name = document.querySelector('#card6-name')
    swords6_Name.innerText = responseCards.data[41].name
    const swords6_elementIcon = document.querySelector('#card6-imgUp')
    swords6_elementIcon.innerText = responseCards.data[41].element_icon
    const swords6_planetIcon = document.querySelector('#card6-imgUp')
    swords6_planetIcon.innerText = responseCards.data[41].planet_icon
    const swords6_astroIcon = document.querySelector('#card6-imgUp')
    swords6_astroIcon.innerText = responseCards.data[41].astro_icon
    const swords6_keyUp = document.querySelector('#card6-keyUp')
    swords6_keyUp.innerText = responseCards.data[41].up_key
    const swords6_keyRev = document.querySelector('#card6-keyUp')
    swords6_keyRev.innerText = responseCards.data[41].rev_key
    // const card6Explore = document.querySelector('#card6-explore')

    const swords7_img = document.querySelector('#card7-imgUp')
    swords7_img.src = responseCards.data[42].up_img
    const swords7_Name = document.querySelector('#card7-name')
    swords7_Name.innerText = responseCards.data[42].name
    const swords7_elementIcon = document.querySelector('#card7-imgUp')
    swords7_elementIcon.innerText = responseCards.data[42].element_icon
    const swords7_planetIcon = document.querySelector('#card7-imgUp')
    swords7_planetIcon.innerText = responseCards.data[42].planet_icon
    const swords7_astroIcon = document.querySelector('#card7-imgUp')
    swords7_astroIcon.innerText = responseCards.data[42].astro_icon
    const swords7_keyUp = document.querySelector('#card7-keyUp')
    swords7_keyUp.innerText = responseCards.data[42].up_key
    const swords7_keyRev = document.querySelector('#card7-keyUp')
    swords7_keyRev.innerText = responseCards.data[42].rev_key
    // const card7Explore = document.querySelector('#card7-explore')

    const swords8_img = document.querySelector('#card8-imgUp')
    swords8_img.src = responseCards.data[43].up_img
    const swords8_Name = document.querySelector('#card8-name')
    swords8_Name.innerText = responseCards.data[43].name
    const swords8_elementIcon = document.querySelector('#card8-imgUp')
    swords8_elementIcon.innerText = responseCards.data[43].element_icon
    const swords8_planetIcon = document.querySelector('#card8-imgUp')
    swords8_planetIcon.innerText = responseCards.data[43].planet_icon
    const swords8_astroIcon = document.querySelector('#card8-imgUp')
    swords8_astroIcon.innerText = responseCards.data[43].astro_icon
    const swords8_keyUp = document.querySelector('#card8-keyUp')
    swords8_keyUp.innerText = responseCards.data[43].up_key
    const swords8_keyRev = document.querySelector('#card8-keyUp')
    swords8_keyRev.innerText = responseCards.data[43].rev_key
    // const card8Explore = document.querySelector('#card8-explore')

    const swords9_img = document.querySelector('#card9-imgUp')
    swords9_img.src = responseCards.data[44].up_img
    const swords9_Name = document.querySelector('#card9-name')
    swords9_Name.innerText = responseCards.data[44].name
    const swords9_elementIcon = document.querySelector('#card9-imgUp')
    swords9_elementIcon.innerText = responseCards.data[44].element_icon
    const swords9_planetIcon = document.querySelector('#card9-imgUp')
    swords9_planetIcon.innerText = responseCards.data[44].planet_icon
    const swords9_astroIcon = document.querySelector('#card9-imgUp')
    swords9_astroIcon.innerText = responseCards.data[44].astro_icon
    const swords9_keyUp = document.querySelector('#card9-keyUp')
    swords9_keyUp.innerText = responseCards.data[44].up_key
    const swords9_keyRev = document.querySelector('#card9-keyUp')
    swords9_keyRev.innerText = responseCards.data[44].rev_key
    // const card9Explore = document.querySelector('#card9-explore')

    const swords10_img = document.querySelector('#card10-imgUp')
    swords10_img.src = responseCards.data[45].up_img
    const swords10_Name = document.querySelector('#card10-name')
    swords10_Name.innerText = responseCards.data[45].name
    const swords10_elementIcon = document.querySelector('#card10-imgUp')
    swords10_elementIcon.innerText = responseCards.data[45].element_icon
    const swords10_planetIcon = document.querySelector('#card10-imgUp')
    swords10_planetIcon.innerText = responseCards.data[45].planet_icon
    const swords10_astroIcon = document.querySelector('#card10-imgUp')
    swords10_astroIcon.innerText = responseCards.data[45].astro_icon
    const swords10_keyUp = document.querySelector('#card10-keyUp')
    swords10_keyUp.innerText = responseCards.data[45].up_key
    const swords10_keyRev = document.querySelector('#card10-keyUp')
    swords10_keyRev.innerText = responseCards.data[45].rev_key
    // const card10Explore = document.querySelector('#card10-explore')

    const swordsP_img = document.querySelector('#card11-imgUp')
    swordsP_img.src = responseCards.data[46].up_img
    const swordsP_Name = document.querySelector('#card11-name')
    swordsP_Name.innerText = responseCards.data[46].name
    const swordsP_elementIcon = document.querySelector('#card11-imgUp')
    swordsP_elementIcon.innerText = responseCards.data[46].element_icon
    const swordsP_planetIcon = document.querySelector('#card11-imgUp')
    swordsP_planetIcon.innerText = responseCards.data[46].planet_icon
    const swordsP_astroIcon = document.querySelector('#card11-imgUp')
    swordsP_astroIcon.innerText = responseCards.data[46].astro_icon
    const swordsP_keyUp = document.querySelector('#card11-keyUp')
    swordsP_keyUp.innerText = responseCards.data[46].up_key
    const swordsP_keyRev = document.querySelector('#card11-keyUp')
    swordsP_keyRev.innerText = responseCards.data[46].rev_key
    // const card11Explore = document.querySelector('#card11-explore')

    const swordsKn_img = document.querySelector('#card12-imgUp')
    swordsKn_img.src = responseCards.data[47].up_img
    const swordsKn_Name = document.querySelector('#card12-name')
    swordsKn_Name.innerText = responseCards.data[47].name
    const swordsKn_elementIcon = document.querySelector('#card12-imgUp')
    swordsKn_elementIcon.innerText = responseCards.data[47].element_icon
    const swordsKn_planetIcon = document.querySelector('#card12-imgUp')
    swordsKn_planetIcon.innerText = responseCards.data[47].planet_icon
    const swordsKn_astroIcon = document.querySelector('#card12-imgUp')
    swordsKn_astroIcon.innerText = responseCards.data[47].astro_icon
    const swordsKn_keyUp = document.querySelector('#card12-keyUp')
    swordsKn_keyUp.innerText = responseCards.data[47].up_key
    const swordsKn_keyRev = document.querySelector('#card12-keyUp')
    swordsKn_keyRev.innerText = responseCards.data[47].rev_key
    // const card12Explore = document.querySelector('#card12-explore')

    const swordsQ_img = document.querySelector('#card13-imgUp')
    swordsQ_img.src = responseCards.data[48].up_img
    const swordsQ_Name = document.querySelector('#card13-name')
    swordsQ_Name.innerText = responseCards.data[48].name
    const swordsQ_elementIcon = document.querySelector('#card13-imgUp')
    swordsQ_elementIcon.innerText = responseCards.data[48].element_icon
    const swordsQ_planetIcon = document.querySelector('#card13-imgUp')
    swordsQ_planetIcon.innerText = responseCards.data[48].planet_icon
    const swordsQ_astroIcon = document.querySelector('#card13-imgUp')
    swordsQ_astroIcon.innerText = responseCards.data[48].astro_icon
    const swordsQ_keyUp = document.querySelector('#card13-keyUp')
    swordsQ_keyUp.innerText = responseCards.data[48].up_key
    const swordsQ_keyRev = document.querySelector('#card13-keyUp')
    swordsQ_keyRev.innerText = responseCards.data[48].rev_key
    // const card13Explore = document.querySelector('#card13-explore')

    const swordsKi_img = document.querySelector('#card14-imgUp')
    swordsKi_img.src = responseCards.data[49].up_img
    const swordsKi_Name = document.querySelector('#card14-name')
    swordsKi_Name.innerText = responseCards.data[49].name
    const swordsKi_elementIcon = document.querySelector('#card14-imgUp')
    swordsKi_elementIcon.innerText = responseCards.data[49].element_icon
    const swordsKi_planetIcon = document.querySelector('#card14-imgUp')
    swordsKi_planetIcon.innerText = responseCards.data[49].planet_icon
    const swordsKi_astroIcon = document.querySelector('#card14-imgUp')
    swordsKi_astroIcon.innerText = responseCards.data[49].astro_icon
    const swordsKi_keyUp = document.querySelector('#card14-keyUp')
    swordsKi_keyUp.innerText = responseCards.data[49].up_key
    const swordsKi_keyRev = document.querySelector('#card14-keyUp')
    swordsKi_keyRev.innerText = responseCards.data[49].rev_key
    // const card14Explore = document.querySelector('#card14-explore')

    
}
getData()

const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', () => {
    // Move back to Explore page
    window.location.href = "explorePage.html"
})
