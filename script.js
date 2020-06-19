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
  ];
  function clearList() {
    document.getElementById('Gearloc1').innerHTML = '';
    document.getElementById('Gearloc2').innerHTML = '';
    document.getElementById('Gearloc3').innerHTML = '';
    document.getElementById('Gearloc4').innerHTML = '';
  }
  function getGearlocs(playerCount) {
    clearList();
    let i = 1;
    while (i <= playerCount) {
      const loc = document.getElementById(`Gearloc${i}`);
      const randNum = Math.floor(Math.random() * (gearlocList.length - 1));
      loc.innerHTML = gearlocList[randNum];
      gearlocList.splice(randNum, 1);
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

  const btnPicket = document.querySelector('#Picket');
  btnPicket.addEventListener('click', e => {
    const check = gearlocList.indexOf('Picket');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnPicket.style.background = '#800000';
      btnPicket.style.color = '#808080';
    } else {
      gearlocList.push('Picket');
      btnPicket.style.background = '#e0ac2f';
      btnPicket.style.color = 'white';
    }
  });

  const btnPatches = document.querySelector('#Patches');
  btnPatches.addEventListener('click', e => {
    const check = gearlocList.indexOf('Patches');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnPatches.style.background = '#800000';
      btnPatches.style.color = '#808080';
    } else {
      gearlocList.push('Patches');
      btnPatches.style.background = '#e0ac2f';
      btnPatches.style.color = 'white';
    }
  });

  const btnTantrum = document.querySelector('#Tantrum');
  btnTantrum.addEventListener('click', e => {
    const check = gearlocList.indexOf('Tantrum');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnTantrum.style.background = '#800000';
      btnTantrum.style.color = '#808080';
    } else {
      gearlocList.push('Tantrum');
      btnTantrum.style.background = '#e0ac2f';
      btnTantrum.style.color = 'white';
    }
  });

  const btnBoomer = document.querySelector('#Boomer');
  btnBoomer.addEventListener('click', e => {
    const check = gearlocList.indexOf('Boomer');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnBoomer.style.background = '#800000';
      btnBoomer.style.color = '#808080';
    } else {
      gearlocList.push('Boomer');
      btnBoomer.style.background = '#e0ac2f';
      btnBoomer.style.color = 'white';
    }
  });

  const btnTink = document.querySelector('#Tink');
  btnTink.addEventListener('click', e => {
    const check = gearlocList.indexOf('Tink');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnTink.style.background = '#800000';
      btnTink.style.color = '#808080';
    } else {
      gearlocList.push('Tink');
      btnTink.style.background = '#e0ac2f';
      btnTink.style.color = 'white';
    }
  });

  const btnGhille = document.querySelector('#Ghille');
  btnGhille.addEventListener('click', e => {
    const check = gearlocList.indexOf('Ghille');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnGhille.style.background = '#800000';
      btnGhille.style.color = '#808080';
    } else {
      gearlocList.push('Ghille');
      btnGhille.style.background = '#e0ac2f';
      btnGhille.style.color = 'white';
    }
  });

  const btnNugget = document.querySelector('#Nugget');
  btnNugget.addEventListener('click', e => {
    const check = gearlocList.indexOf('Nugget');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnNugget.style.background = '#800000';
      btnNugget.style.color = '#808080';
    } else {
      gearlocList.push('Nugget');
      btnNugget.style.background = '#e0ac2f';
      btnNugget.style.color = 'white';
    }
  });

  const btnStanza = document.querySelector('#Stanza');
  btnStanza.addEventListener('click', e => {
    const check = gearlocList.indexOf('Stanza');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnStanza.style.background = '#800000';
      btnStanza.style.color = '#808080';
    } else {
      gearlocList.push('Stanza');
      btnStanza.style.background = '#e0ac2f';
      btnStanza.style.color = 'white';
    }
  });

  const btnDuster = document.querySelector('#Duster');
  btnDuster.addEventListener('click', e => {
    const check = gearlocList.indexOf('Duster');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnDuster.style.background = '#800000';
      btnDuster.style.color = '#808080';
    } else {
      gearlocList.push('Duster');
      btnDuster.style.background = '#e0ac2f';
      btnDuster.style.color = 'white';
    }
  });

  const btnGasket = document.querySelector('#Gasket');
  btnGasket.addEventListener('click', e => {
    const check = gearlocList.indexOf('Gasket');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnGasket.style.background = '#800000';
      btnGasket.style.color = '#808080';
    } else {
      gearlocList.push('Gasket');
      btnGasket.style.background = '#e0ac2f';
      btnGasket.style.color = 'white';
    }
  });

  const btnLabRats = document.querySelector('#LabRats');
  btnLabRats.addEventListener('click', e => {
    const check = gearlocList.indexOf('Lab Rats');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnLabRats.style.background = '#800000';
      btnLabRats.style.color = '#808080';
    } else {
      gearlocList.push('Lab Rats');
      btnLabRats.style.background = '#e0ac2f';
      btnLabRats.style.color = 'white';
    }
  });

  const btnDart = document.querySelector('#Dart');
  btnDart.addEventListener('click', e => {
    const check = gearlocList.indexOf('Dart');
    if (check != -1) {
      gearlocList.splice(check, 1);
      btnDart.style.background = '#800000';
      btnDart.style.color = '#808080';
    } else {
      gearlocList.push('Dart');
      btnDart.style.background = '#e0ac2f';
      btnDart.style.color = 'white';
    }
  });
};
