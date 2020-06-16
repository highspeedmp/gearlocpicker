// Add function to fill in other player's choices so we don't pick them 
// Fill out player names - select Ghille if playerName = Geoff
// Choose how many players we are randomly selecting for

window.onload = function () {
var gearlocList = ["Picket","Patches","Tantrum","Boomer","Tink","Ghille","Nugget","Stanza","Duster","Gasket","Lab Rats","Dart"]
const randomGearloc = document.querySelector('#randomGearloc')
var clicks = 0;
randomGearloc.addEventListener('click', (e) => {   
   clicks += 1; 
   if (clicks > 4){
    document.getElementById('Gearloc1').innerHTML = "";
    document.getElementById('Gearloc2').innerHTML = "";
    document.getElementById('Gearloc3').innerHTML = "";
    document.getElementById('Gearloc4').innerHTML = "";
    clicks = 1;
  } 
    var loc = document.getElementById('Gearloc' + clicks);
    var randNum = Math.floor(Math.random() * (gearlocList.length - 1));
    loc.innerHTML = gearlocList[randNum];
    gearlocList.splice(randNum,1);
})

}