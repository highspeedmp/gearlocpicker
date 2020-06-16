// Add function to fill in other player's choices so we don't pick them 
// Fill out player names - select Ghille if playerName = Geoff
// Choose how many players we are randomly selecting for


window.onload = function () {
const gearlocList = ["Picket","Patches","Tantrum","Boomer","Tink","Ghille","Nugget","Stanza","Duster","Gasket","Lab Rats","Dart"]
const randomGearloc = document.querySelector('#randomGearloc')
randomGearloc.addEventListener('click', (e) => {   
    var loc = document.getElementById('selectedGearloc');
    loc.innerHTML = gearlocList[Math.floor(Math.random() * 12)]
})

}