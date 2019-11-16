let orcsSlain = 0;
let killElem = document.querySelector("#kill-count");
let swordPrice = document.querySelector("#sword-price");
let bowPrice = document.querySelector("#bow-price");
let spikesPrice = document.querySelector("#spikes-price");
let companionsPrice = document.querySelector("#companions-price");
let swordBtn = document.querySelector("#sword-button");
let bowBtn = document.querySelector("#bow-button");
let spikesBtn = document.querySelector("#spikes-button");
let companionsBtn = document.querySelector("#companions-button");
let swordMod = document.querySelector("#sword-mod");
let bowMod = document.querySelector("#bow-mod");
let spikesMod = document.querySelector("#spikes-mod");
let companionsMod = document.querySelector("#companions-mod");

function kill() {
  orcsSlain++;
  orcsSlain += clickUpgrades.sword.quantity * clickUpgrades.sword.damage;
  orcsSlain += clickUpgrades.bow.quantity * clickUpgrades.bow.damage;
  orcsSlain += clickUpgrades.spikes.quantity * clickUpgrades.spikes.damage;
  countKills();
}
function countKills() {
  killElem.innerText = orcsSlain;
}
function updateSwords() {
  if (clickUpgrades.sword.priceIndex == 0) {
    swordPrice.innerText = clickUpgrades.sword.price[0];
  } else if (clickUpgrades.sword.priceIndex == 1) {
    swordPrice.innerText = clickUpgrades.sword.price[1];
  }
  if (orcsSlain < clickUpgrades.sword.price[0]) {
    swordBtn.setAttribute("disabled", "true");
  } else if (
    clickUpgrades.sword.priceIndex == 1 &&
    orcsSlain < clickUpgrades.sword.price[1]
  ) {
    swordBtn.setAttribute("disabled", "true");
  } else if (orcsSlain > clickUpgrades.sword.price[0]) {
    swordBtn.removeAttribute("disabled");
  }
  swordMod.innerText = clickUpgrades.sword.quantity;
}
function updateBow() {
  if (clickUpgrades.bow.priceIndex == 0) {
    bowPrice.innerText = clickUpgrades.bow.price[0];
  } else {
    bowPrice.innerText = clickUpgrades.bow.price[1];
  }
  bowMod.innerText = clickUpgrades.bow.quantity;
}
function updateSpikes() {
  if (clickUpgrades.spikes.priceIndex == 0) {
    spikesPrice.innerText = clickUpgrades.spikes.price[0];
  } else {
    spikesPrice.innerText = clickUpgrades.spikes.price[1];
  }
  spikesMod.innerText = clickUpgrades.spikes.quantity;
}
function updateCompanions() {
  if ((autoUpgrades.companions.price = 150)) {
    companionsPrice.innerText = autoUpgrades.companions.price;
  }
  companionsMod.innerText = autoUpgrades.companions.quantity;
}

let clickUpgrades = {
  sword: {
    price: [10, 50],
    priceIndex: 0,
    damage: 2,
    quantity: 0
  },
  bow: {
    price: [20, 75],
    priceIndex: 0,
    damage: 5,
    quantity: 0
  },
  spikes: {
    price: [50, 150],
    priceIndex: 0,
    damage: 20,
    quantity: 0
  }
};
let autoUpgrades = {
  companions: {
    price: 150,
    damage: 30,
    quantity: 0
  }
};

function buysword() {
  clickUpgrades.sword.quantity++;
  if (clickUpgrades.sword.quantity <= 10) {
    orcsSlain -= clickUpgrades.sword.price[0];
  } else {
    orcsSlain -= clickUpgrades.sword.price[1];
  }
  if (clickUpgrades.sword.quantity == 10) {
    clickUpgrades.sword.priceIndex++;
  }
  countKills();
  updateSwords();
}
function buybow() {
  clickUpgrades.bow.quantity++;
  if (clickUpgrades.bow.quantity <= 10) {
    orcsSlain -= clickUpgrades.bow.price[0];
  } else {
    orcsSlain -= clickUpgrades.bow.price[1];
  }
  if (clickUpgrades.bow.quantity == 5) {
    clickUpgrades.bow.priceIndex++;
  }
  countKills();
  updateBow();
}
function buyspikes() {
  clickUpgrades.spikes.quantity++;
  if (clickUpgrades.spikes.quantity <= 10) {
    orcsSlain -= clickUpgrades.spikes.price[0];
  } else {
    orcsSlain -= clickUpgrades.spikes.price[1];
  }
  if (clickUpgrades.spikes.quantity == 3) {
    clickUpgrades.spikes.priceIndex++;
  }
  countKills();
  updateSpikes();
}
function buycompanions() {
  autoUpgrades.companions.quantity++;
}
// function collectAutoUpgrades() {
//   orcsSlain += autoUpgrades.quantity * 20;
// }
// function startInterval() {
//   setInterval(collectAutoUpgrades, 3000);
//   countKills();
// }
