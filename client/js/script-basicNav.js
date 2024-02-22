console.log('Basic Nav - Working')

// Secondary Nav (via header icons)
const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "homePage.html"
})
const usersPage = document.querySelector('#user-img')
usersPage.addEventListener('click', () => {
    // Move to User page
    window.location.href = "userPage.html"
})


// Side Menu
function openMenu() {
    document.getElementById("sideMenu").style.width = "75%";
}
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}
const menuTitle = document.querySelector('#menu-title')
menuTitle.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "homePage.html"
})
const menuExplore = document.querySelector('#menu-explore')
menuExplore.addEventListener('click', () => {
    // Move to Explore page
    window.location.href = "explorePage.html"
})
const menuNewReading = document.querySelector('#menu-newReading')
menuNewReading.addEventListener('click', () => {
    // Move to Deal page
    window.location.href = "dealPage.html"
})
const menuPastReadings = document.querySelector('#menu-pastReadings')
menuPastReadings.addEventListener('click', () => {
    // Move to Past page
    window.location.href = "pastPage.html"
})

