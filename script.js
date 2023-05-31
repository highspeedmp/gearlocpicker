window.onload = function() {
  const gearlocList = [
    'Picket',
    'Patches',
    'Tantrum',
    'Boomer',
    'Tink',
    'Ghille',
    'Nugget',
    'Stanza',
    'Duster',
    'Gasket',
    'Lab Rats',
    'Dart',
    'Riffle',
    'Figment',
    'Gale',
    'Polaris',
    'Static',
    'Carcass',
  ];
  const tyrantList = [
    'Nom',
    'Mulmesh',
    'Duster',
    'Goblin King',
    'Drellen',
    'VolKesh',
    'Barnacle',
    'Build a Tyrant',
  ];
  function clearList() {
    document.getElementById('Gearloc1').innerHTML = '';
    document.getElementById('Gearloc2').innerHTML = '';
    document.getElementById('Gearloc3').innerHTML = '';
    document.getElementById('Gearloc4').innerHTML = '';
  }
  function getGearlocs(playerCount) {
    clearList();
    const gearlocListCopy = [...gearlocList];
    let i = 1;
    while (i <= playerCount) {
      const loc = document.getElementById(`Gearloc${i}`);
      const randNum = Math.floor(Math.random() * (gearlocListCopy.length - 1));
      loc.innerHTML = gearlocListCopy[randNum];
      gearlocListCopy.splice(randNum, 1);
      i++;
    }
  }
  const randomGearloc1 = document.querySelector('#randomGearloc1');
  randomGearloc1.addEventListener('click', e => {
    getGearlocs(1);
  });
  const randomGearloc2 = document.querySelector('#randomGearloc2');
  randomGearloc2.addEventListener('click', e => {
    getGearlocs(2);
  });
  const randomGearloc3 = document.querySelector('#randomGearloc3');
  randomGearloc3.addEventListener('click', e => {
    getGearlocs(3);
  });
  const randomGearloc4 = document.querySelector('#randomGearloc4');
  randomGearloc4.addEventListener('click', e => {
    getGearlocs(4);
  });

// Create a container for the buttons
const buttonContainer = document.getElementById('preselected_container');

// Loop through the array of Gearlocs
gearlocList.forEach((gearloc) => {
  // Create a new button
  const button = document.createElement('button');
  // Set the button's text to the Gearloc
  button.textContent = gearloc;
  // Add the button to the button container
  buttonContainer.appendChild(button);
  // Add an event listener to the button
  button.addEventListener('click', e => {
    // Get the index of the gear location in the array
    const index = gearlocList.indexOf(gearloc);
    // If the gear location is in the array
    if (index != -1) {
      // Remove the gear location from the array
      gearlocList.splice(index, 1);
      // Change the button's background color to black
      button.style.backgroundColor = '#0f1117';
      // Change the button's text color to gray
      button.style.color = '#808080';
    } else {
      // Add the gear location to the array
      gearlocList.push(gearloc);
      // Change the button's background color to orange
      button.style.backgroundColor = '#ff6b00';
      // Change the button's text color to white
      button.style.color = 'white';
    }

  });

});
};
