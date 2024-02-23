console.log('working')

const getData = async () => {
    const responseUsers = await axios.get(`http://localhost:3001/users`)
    console.log(responseUsers)
    const user_img = document.querySelector('#user-img')
    user_img.src = responseUsers.data[2].img   

    const responseCards = await axios.get(`http://localhost:3001/cards`)
    console.log(responseCards)

    // const major_Suit = document.querySelector('#suitName')
    // major_Suit.innerText = responseCards.data[0].suit

    const major0_img = document.querySelector('#card0-imgUp')
    major0_img.src = responseCards.data[0].up_img
    const major0_Name = document.querySelector('#card0-name')
    major0_Name.innerText = responseCards.data[0].name
    const major0_elementIcon = document.querySelector('#card0-imgUp')
    major0_elementIcon.innerText = responseCards.data[0].element_icon
    const major0_planetIcon = document.querySelector('#card0-imgUp')
    major0_planetIcon.innerText = responseCards.data[0].planet_icon
    const major0_astroIcon = document.querySelector('#card0-imgUp')
    major0_astroIcon.innerText = responseCards.data[0].astro_icon
    const major0_keyUp = document.querySelector('#card0-keyUp')
    major0_keyUp.innerText = responseCards.data[0].up_key
    const major0_keyRev = document.querySelector('#card0-keyRev')
    major0_keyRev.innerText = responseCards.data[0].rev_key
    // const card0Explore = document.querySelector('#card0-explore')

    const major1_img = document.querySelector('#card1-imgUp')
    major1_img.src = responseCards.data[1].up_img
    const major1_Name = document.querySelector('#card1-name')
    major1_Name.innerText = responseCards.data[1].name
    const major1_elementIcon = document.querySelector('#card1-imgUp')
    major1_elementIcon.innerText = responseCards.data[1].element_icon
    const major1_planetIcon = document.querySelector('#card1-imgUp')
    major1_planetIcon.innerText = responseCards.data[1].planet_icon
    const major1_astroIcon = document.querySelector('#card1-imgUp')
    major1_astroIcon.innerText = responseCards.data[1].astro_icon
    const major1_keyUp = document.querySelector('#card1-keyUp')
    major1_keyUp.innerText = responseCards.data[1].up_key
    const major1_keyRev = document.querySelector('#card1-keyRev')
    major1_keyRev.innerText = responseCards.data[1].rev_key
    // const card1Explore = document.querySelector('#card1-explore')

    const major2_img = document.querySelector('#card2-imgUp')
    major2_img.src = responseCards.data[2].up_img
    const major2_Name = document.querySelector('#card2-name')
    major2_Name.innerText = responseCards.data[2].name
    const major2_elementIcon = document.querySelector('#card2-imgUp')
    major2_elementIcon.innerText = responseCards.data[2].element_icon
    const major2_planetIcon = document.querySelector('#card2-imgUp')
    major2_planetIcon.innerText = responseCards.data[2].planet_icon
    const major2_astroIcon = document.querySelector('#card2-imgUp')
    major2_astroIcon.innerText = responseCards.data[2].astro_icon
    const major2_keyUp = document.querySelector('#card2-keyUp')
    major2_keyUp.innerText = responseCards.data[2].up_key
    const major2_keyRev = document.querySelector('#card2-keyRev')
    major2_keyRev.innerText = responseCards.data[2].rev_key
    // const card2Explore = document.querySelector('#card2-explore')

    const major3_img = document.querySelector('#card3-imgUp')
    major3_img.src = responseCards.data[3].up_img
    const major3_Name = document.querySelector('#card3-name')
    major3_Name.innerText = responseCards.data[3].name
    const major3_elementIcon = document.querySelector('#card3-imgUp')
    major3_elementIcon.innerText = responseCards.data[3].element_icon
    const major3_planetIcon = document.querySelector('#card3-imgUp')
    major3_planetIcon.innerText = responseCards.data[3].planet_icon
    const major3_astroIcon = document.querySelector('#card3-imgUp')
    major3_astroIcon.innerText = responseCards.data[3].astro_icon
    const major3_keyUp = document.querySelector('#card3-keyUp')
    major3_keyUp.innerText = responseCards.data[3].up_key
    const major3_keyRev = document.querySelector('#card3-keyRev')
    major3_keyRev.innerText = responseCards.data[3].rev_key
    // const card3Explore = document.querySelector('#card3-explore')

    const major4_img = document.querySelector('#card4-imgUp')
    major4_img.src = responseCards.data[4].up_img
    const major4_Name = document.querySelector('#card4-name')
    major4_Name.innerText = responseCards.data[4].name
    const major4_elementIcon = document.querySelector('#card4-imgUp')
    major4_elementIcon.innerText = responseCards.data[4].element_icon
    const major4_planetIcon = document.querySelector('#card4-imgUp')
    major4_planetIcon.innerText = responseCards.data[4].planet_icon
    const major4_astroIcon = document.querySelector('#card4-imgUp')
    major4_astroIcon.innerText = responseCards.data[4].astro_icon
    const major4_keyUp = document.querySelector('#card4-keyUp')
    major4_keyUp.innerText = responseCards.data[4].up_key
    const major4_keyRev = document.querySelector('#card4-keyRev')
    major4_keyRev.innerText = responseCards.data[4].rev_key
    // const card4Explore = document.querySelector('#card4-explore')

    const major5_img = document.querySelector('#card5-imgUp')
    major5_img.src = responseCards.data[5].up_img
    const major5_Name = document.querySelector('#card5-name')
    major5_Name.innerText = responseCards.data[5].name
    const major5_elementIcon = document.querySelector('#card5-imgUp')
    major5_elementIcon.innerText = responseCards.data[5].element_icon
    const major5_planetIcon = document.querySelector('#card5-imgUp')
    major5_planetIcon.innerText = responseCards.data[5].planet_icon
    const major5_astroIcon = document.querySelector('#card5-imgUp')
    major5_astroIcon.innerText = responseCards.data[5].astro_icon
    const major5_keyUp = document.querySelector('#card5-keyUp')
    major5_keyUp.innerText = responseCards.data[5].up_key
    const major5_keyRev = document.querySelector('#card5-keyRev')
    major5_keyRev.innerText = responseCards.data[5].rev_key
    // const card5Explore = document.querySelector('#card5-explore')

    const major6_img = document.querySelector('#card6-imgUp')
    major6_img.src = responseCards.data[6].up_img
    const major6_Name = document.querySelector('#card6-name')
    major6_Name.innerText = responseCards.data[6].name
    const major6_elementIcon = document.querySelector('#card6-imgUp')
    major6_elementIcon.innerText = responseCards.data[6].element_icon
    const major6_planetIcon = document.querySelector('#card6-imgUp')
    major6_planetIcon.innerText = responseCards.data[6].planet_icon
    const major6_astroIcon = document.querySelector('#card6-imgUp')
    major6_astroIcon.innerText = responseCards.data[6].astro_icon
    const major6_keyUp = document.querySelector('#card6-keyUp')
    major6_keyUp.innerText = responseCards.data[6].up_key
    const major6_keyRev = document.querySelector('#card6-keyRev')
    major6_keyRev.innerText = responseCards.data[6].rev_key
    // const card6Explore = document.querySelector('#card6-explore')

    const major7_img = document.querySelector('#card7-imgUp')
    major7_img.src = responseCards.data[7].up_img
    const major7_Name = document.querySelector('#card7-name')
    major7_Name.innerText = responseCards.data[7].name
    const major7_elementIcon = document.querySelector('#card7-imgUp')
    major7_elementIcon.innerText = responseCards.data[7].element_icon
    const major7_planetIcon = document.querySelector('#card7-imgUp')
    major7_planetIcon.innerText = responseCards.data[7].planet_icon
    const major7_astroIcon = document.querySelector('#card7-imgUp')
    major7_astroIcon.innerText = responseCards.data[7].astro_icon
    const major7_keyUp = document.querySelector('#card7-keyUp')
    major7_keyUp.innerText = responseCards.data[7].up_key
    const major7_keyRev = document.querySelector('#card7-keyUp')
    major7_keyRev.innerText = responseCards.data[7].rev_key
    // const card7Explore = document.querySelector('#card7-explore')

    const major8_img = document.querySelector('#card8-imgUp')
    major8_img.src = responseCards.data[8].up_img
    const major8_Name = document.querySelector('#card8-name')
    major8_Name.innerText = responseCards.data[8].name
    const major8_elementIcon = document.querySelector('#card8-imgUp')
    major8_elementIcon.innerText = responseCards.data[8].element_icon
    const major8_planetIcon = document.querySelector('#card8-imgUp')
    major8_planetIcon.innerText = responseCards.data[8].planet_icon
    const major8_astroIcon = document.querySelector('#card8-imgUp')
    major8_astroIcon.innerText = responseCards.data[8].astro_icon
    const major8_keyUp = document.querySelector('#card8-keyUp')
    major8_keyUp.innerText = responseCards.data[8].up_key
    const major8_keyRev = document.querySelector('#card8-keyRev')
    major8_keyRev.innerText = responseCards.data[8].rev_key
    const card8Explore = document.querySelector('#card8-explore')
    card8Explore.addEventListener('click', () => {
        // Move back to Single Card page
        window.location.href = "singlePage.html"
    })

    const major9_img = document.querySelector('#card9-imgUp')
    major9_img.src = responseCards.data[9].up_img
    const major9_Name = document.querySelector('#card9-name')
    major9_Name.innerText = responseCards.data[9].name
    const major9_elementIcon = document.querySelector('#card9-imgUp')
    major9_elementIcon.innerText = responseCards.data[9].element_icon
    const major9_planetIcon = document.querySelector('#card9-imgUp')
    major9_planetIcon.innerText = responseCards.data[9].planet_icon
    const major9_astroIcon = document.querySelector('#card9-imgUp')
    major9_astroIcon.innerText = responseCards.data[9].astro_icon
    const major9_keyUp = document.querySelector('#card9-keyUp')
    major9_keyUp.innerText = responseCards.data[9].up_key
    const major9_keyRev = document.querySelector('#card9-keyRev')
    major9_keyRev.innerText = responseCards.data[9].rev_key
    // const card9Explore = document.querySelector('#card9-explore')

    const major10_img = document.querySelector('#card10-imgUp')
    major10_img.src = responseCards.data[10].up_img
    const major10_Name = document.querySelector('#card10-name')
    major10_Name.innerText = responseCards.data[10].name
    const major10_elementIcon = document.querySelector('#card10-imgUp')
    major10_elementIcon.innerText = responseCards.data[10].element_icon
    const major10_planetIcon = document.querySelector('#card10-imgUp')
    major10_planetIcon.innerText = responseCards.data[10].planet_icon
    const major10_astroIcon = document.querySelector('#card10-imgUp')
    major10_astroIcon.innerText = responseCards.data[10].astro_icon
    const major10_keyUp = document.querySelector('#card10-keyUp')
    major10_keyUp.innerText = responseCards.data[10].up_key
    const major10_keyRev = document.querySelector('#card10-keyRev')
    major10_keyRev.innerText = responseCards.data[10].rev_key
    // const card10Explore = document.querySelector('#card10-explore')

    const major11_img = document.querySelector('#card11-imgUp')
    major11_img.src = responseCards.data[11].up_img
    const major11_Name = document.querySelector('#card11-name')
    major11_Name.innerText = responseCards.data[11].name
    const major11_elementIcon = document.querySelector('#card11-imgUp')
    major11_elementIcon.innerText = responseCards.data[11].element_icon
    const major11_planetIcon = document.querySelector('#card11-imgUp')
    major11_planetIcon.innerText = responseCards.data[11].planet_icon
    const major11_astroIcon = document.querySelector('#card11-imgUp')
    major11_astroIcon.innerText = responseCards.data[11].astro_icon
    const major11_keyUp = document.querySelector('#card11-keyUp')
    major11_keyUp.innerText = responseCards.data[11].up_key
    const major11_keyRev = document.querySelector('#card11-keyRev')
    major11_keyRev.innerText = responseCards.data[11].rev_key
    // const card11Explore = document.querySelector('#card11-explore')

    const major12_img = document.querySelector('#card12-imgUp')
    major12_img.src = responseCards.data[12].up_img
    const major12_Name = document.querySelector('#card12-name')
    major12_Name.innerText = responseCards.data[12].name
    const major12_elementIcon = document.querySelector('#card12-imgUp')
    major12_elementIcon.innerText = responseCards.data[12].element_icon
    const major12_planetIcon = document.querySelector('#card12-imgUp')
    major12_planetIcon.innerText = responseCards.data[12].planet_icon
    const major12_astroIcon = document.querySelector('#card12-imgUp')
    major12_astroIcon.innerText = responseCards.data[12].astro_icon
    const major12_keyUp = document.querySelector('#card12-keyUp')
    major12_keyUp.innerText = responseCards.data[12].up_key
    const major12_keyRev = document.querySelector('#card12-keyRev')
    major12_keyRev.innerText = responseCards.data[12].rev_key
    // const card12Explore = document.querySelector('#card12-explore')

    const major13_img = document.querySelector('#card13-imgUp')
    major13_img.src = responseCards.data[13].up_img
    const major13_Name = document.querySelector('#card13-name')
    major13_Name.innerText = responseCards.data[13].name
    const major13_elementIcon = document.querySelector('#card13-imgUp')
    major13_elementIcon.innerText = responseCards.data[13].element_icon
    const major13_planetIcon = document.querySelector('#card13-imgUp')
    major13_planetIcon.innerText = responseCards.data[13].planet_icon
    const major13_astroIcon = document.querySelector('#card13-imgUp')
    major13_astroIcon.innerText = responseCards.data[13].astro_icon
    const major13_keyUp = document.querySelector('#card13-keyUp')
    major13_keyUp.innerText = responseCards.data[13].up_key
    const major13_keyRev = document.querySelector('#card13-keyRev')
    major13_keyRev.innerText = responseCards.data[13].rev_key
    // const card13Explore = document.querySelector('#card13-explore')

    const major14_img = document.querySelector('#card14-imgUp')
    major14_img.src = responseCards.data[14].up_img
    const major14_Name = document.querySelector('#card14-name')
    major14_Name.innerText = responseCards.data[14].name
    const major14_elementIcon = document.querySelector('#card14-imgUp')
    major14_elementIcon.innerText = responseCards.data[14].element_icon
    const major14_planetIcon = document.querySelector('#card14-imgUp')
    major14_planetIcon.innerText = responseCards.data[14].planet_icon
    const major14_astroIcon = document.querySelector('#card14-imgUp')
    major14_astroIcon.innerText = responseCards.data[14].astro_icon
    const major14_keyUp = document.querySelector('#card14-keyUp')
    major14_keyUp.innerText = responseCards.data[14].up_key
    const major14_keyRev = document.querySelector('#card14-keyRev')
    major14_keyRev.innerText = responseCards.data[14].rev_key
    // const card14Explore = document.querySelector('#card14-explore')

    const major15_img = document.querySelector('#card15-imgUp')
    major15_img.src = responseCards.data[15].up_img
    const major15_Name = document.querySelector('#card15-name')
    major15_Name.innerText = responseCards.data[15].name
    const major15_elementIcon = document.querySelector('#card15-imgUp')
    major15_elementIcon.innerText = responseCards.data[15].element_icon
    const major15_planetIcon = document.querySelector('#card15-imgUp')
    major15_planetIcon.innerText = responseCards.data[15].planet_icon
    const major15_astroIcon = document.querySelector('#card15-imgUp')
    major15_astroIcon.innerText = responseCards.data[15].astro_icon
    const major15_keyUp = document.querySelector('#card15-keyUp')
    major15_keyUp.innerText = responseCards.data[15].up_key
    const major15_keyRev = document.querySelector('#card15-keyRev')
    major15_keyRev.innerText = responseCards.data[15].rev_key
    // const card15Explore = document.querySelector('#card15-explore')

    const major16_img = document.querySelector('#card16-imgUp')
    major16_img.src = responseCards.data[16].up_img
    const major16_Name = document.querySelector('#card16-name')
    major16_Name.innerText = responseCards.data[16].name
    const major16_elementIcon = document.querySelector('#card16-imgUp')
    major16_elementIcon.innerText = responseCards.data[16].element_icon
    const major16_planetIcon = document.querySelector('#card16-imgUp')
    major16_planetIcon.innerText = responseCards.data[16].planet_icon
    const major16_astroIcon = document.querySelector('#card16-imgUp')
    major16_astroIcon.innerText = responseCards.data[16].astro_icon
    const major16_keyUp = document.querySelector('#card16-keyUp')
    major16_keyUp.innerText = responseCards.data[16].up_key
    const major16_keyRev = document.querySelector('#card16-keyRev')
    major16_keyRev.innerText = responseCards.data[16].rev_key
    // const card16Explore = document.querySelector('#card16-explore')

    const major17_img = document.querySelector('#card17-imgUp')
    major17_img.src = responseCards.data[17].up_img
    const major17_Name = document.querySelector('#card17-name')
    major17_Name.innerText = responseCards.data[17].name
    const major17_elementIcon = document.querySelector('#card17-imgUp')
    major17_elementIcon.innerText = responseCards.data[17].element_icon
    const major17_planetIcon = document.querySelector('#card17-imgUp')
    major17_planetIcon.innerText = responseCards.data[17].planet_icon
    const major17_astroIcon = document.querySelector('#card17-imgUp')
    major17_astroIcon.innerText = responseCards.data[17].astro_icon
    const major17_keyUp = document.querySelector('#card17-keyUp')
    major17_keyUp.innerText = responseCards.data[17].up_key
    const major17_keyRev = document.querySelector('#card17-keyRev')
    major17_keyRev.innerText = responseCards.data[17].rev_key
    // const card17Explore = document.querySelector('#card17-explore')

    const major18_img = document.querySelector('#card18-imgUp')
    major18_img.src = responseCards.data[18].up_img
    const major18_Name = document.querySelector('#card18-name')
    major18_Name.innerText = responseCards.data[18].name
    const major18_elementIcon = document.querySelector('#card18-imgUp')
    major18_elementIcon.innerText = responseCards.data[18].element_icon
    const major18_planetIcon = document.querySelector('#card18-imgUp')
    major18_planetIcon.innerText = responseCards.data[18].planet_icon
    const major18_astroIcon = document.querySelector('#card18-imgUp')
    major18_astroIcon.innerText = responseCards.data[18].astro_icon
    const major18_keyUp = document.querySelector('#card18-keyUp')
    major18_keyUp.innerText = responseCards.data[18].up_key
    const major18_keyRev = document.querySelector('#card18-keyRev')
    major18_keyRev.innerText = responseCards.data[18].rev_key
    // const card18Explore = document.querySelector('#card18-explore')

    const major19_img = document.querySelector('#card19-imgUp')
    major19_img.src = responseCards.data[19].up_img
    const major19_Name = document.querySelector('#card19-name')
    major19_Name.innerText = responseCards.data[19].name
    const major19_elementIcon = document.querySelector('#card19-imgUp')
    major19_elementIcon.innerText = responseCards.data[19].element_icon
    const major19_planetIcon = document.querySelector('#card19-imgUp')
    major19_planetIcon.innerText = responseCards.data[19].planet_icon
    const major19_astroIcon = document.querySelector('#card19-imgUp')
    major19_astroIcon.innerText = responseCards.data[19].astro_icon
    const major19_keyUp = document.querySelector('#card19-keyUp')
    major19_keyUp.innerText = responseCards.data[19].up_key
    const major19_keyRev = document.querySelector('#card19-keyRev')
    major19_keyRev.innerText = responseCards.data[19].rev_key
    // const card19Explore = document.querySelector('#card19-explore')

    const major20_img = document.querySelector('#card20-imgUp')
    major20_img.src = responseCards.data[20].up_img
    const major20_Name = document.querySelector('#card20-name')
    major20_Name.innerText = responseCards.data[20].name
    const major20_elementIcon = document.querySelector('#card20-imgUp')
    major20_elementIcon.innerText = responseCards.data[20].element_icon
    const major20_planetIcon = document.querySelector('#card20-imgUp')
    major20_planetIcon.innerText = responseCards.data[20].planet_icon
    const major20_astroIcon = document.querySelector('#card20-imgUp')
    major20_astroIcon.innerText = responseCards.data[20].astro_icon
    const major20_keyUp = document.querySelector('#card20-keyUp')
    major20_keyUp.innerText = responseCards.data[20].up_key
    const major20_keyRev = document.querySelector('#card20-keyRev')
    major20_keyRev.innerText = responseCards.data[20].rev_key
    // const card20Explore = document.querySelector('#card20-explore')

    const major21_img = document.querySelector('#card21-imgUp')
    major21_img.src = responseCards.data[21].up_img
    const major21_Name = document.querySelector('#card21-name')
    major21_Name.innerText = responseCards.data[21].name
    const major21_elementIcon = document.querySelector('#card21-imgUp')
    major21_elementIcon.innerText = responseCards.data[21].element_icon
    const major21_planetIcon = document.querySelector('#card21-imgUp')
    major21_planetIcon.innerText = responseCards.data[21].planet_icon
    const major21_astroIcon = document.querySelector('#card21-imgUp')
    major21_astroIcon.innerText = responseCards.data[21].astro_icon
    const major21_keyUp = document.querySelector('#card21-keyUp')
    major21_keyUp.innerText = responseCards.data[21].up_key
    const major21_keyRev = document.querySelector('#card21-keyRev')
    major21_keyRev.innerText = responseCards.data[21].rev_key
    // const card21Explore = document.querySelector('#card21-explore')

}
getData()

const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', () => {
    // Move back to Explore page
    window.location.href = "explorePage.html"
})