// Variables
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

//Counting function
function kill() {
  orcsSlain++;
  orcsSlain += clickUpgrades.sword.quantity * clickUpgrades.sword.damage;
  orcsSlain += clickUpgrades.bow.quantity * clickUpgrades.bow.damage;
  orcsSlain += clickUpgrades.spikes.quantity * clickUpgrades.spikes.damage;
  callEveryone();
}
function countKills() {
  killElem.innerText = orcsSlain;
}

// Updating info functions
function updateSwords() {
  if (clickUpgrades.sword.priceIndex == 0) {
    swordPrice.innerText = clickUpgrades.sword.price[0];
  } else if (clickUpgrades.sword.priceIndex == 1) {
    swordPrice.innerText = clickUpgrades.sword.price[1];
  }
  swordMod.innerText = clickUpgrades.sword.quantity;
  if (orcsSlain < clickUpgrades.sword.price[0]) {
    swordBtn.setAttribute("disabled", "true");
  } else if (
    clickUpgrades.sword.priceIndex == 1 &&
    orcsSlain < clickUpgrades.sword.price[1]
  ) {
    swordBtn.setAttribute("disabled", "true");
  } else {
    swordBtn.removeAttribute("disabled");
  }
}
function updateBow() {
  if (clickUpgrades.bow.priceIndex == 0) {
    bowPrice.innerText = clickUpgrades.bow.price[0];
  } else {
    bowPrice.innerText = clickUpgrades.bow.price[1];
  }
  if (orcsSlain < clickUpgrades.bow.price[0]) {
    bowBtn.setAttribute("disabled", "true");
  } else if (
    clickUpgrades.bow.priceIndex == 1 &&
    orcsSlain < clickUpgrades.bow.price[1]
  ) {
    bowBtn.setAttribute("disabled", "true");
  } else {
    bowBtn.removeAttribute("disabled");
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
  if (orcsSlain < clickUpgrades.spikes.price[0]) {
    spikesBtn.setAttribute("disabled", "true");
  } else if (
    clickUpgrades.spikes.priceIndex == 1 &&
    orcsSlain < clickUpgrades.spikes.price[1]
  ) {
    spikesBtn.setAttribute("disabled", "true");
  } else {
    spikesBtn.removeAttribute("disabled");
  }
}
function updateCompanions() {
  if (autoUpgrades.companions.priceIndex == 0) {
    companionsPrice.innerText = autoUpgrades.companions.price[0];
  } else {
    companionsPrice.innerText = autoUpgrades.companions.price[1];
  }
  companionsMod.innerText = autoUpgrades.companions.quantity;
  if (orcsSlain < autoUpgrades.companions.price[0]) {
    companionsBtn.setAttribute("disabled", "true");
  } else if (
    autoUpgrades.companions.priceIndex == 1 &&
    orcsSlain < autoUpgrades.companions.price[1]
  ) {
    companionsBtn.setAttribute("disabled", "true");
  } else {
    companionsBtn.removeAttribute("disabled");
  }
}

//Objects and their properties

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
    price: [250, 750],
    priceIndex: 0,
    damage: 30,
    quantity: 0
  }
};

// Buying functions...clicking the buttons
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
  callEveryone();
}
function buybow() {
  clickUpgrades.bow.quantity++;
  if (clickUpgrades.bow.quantity <= 5) {
    orcsSlain -= clickUpgrades.bow.price[0];
  } else {
    orcsSlain -= clickUpgrades.bow.price[1];
  }
  if (clickUpgrades.bow.quantity == 5) {
    clickUpgrades.bow.priceIndex++;
  }
  callEveryone();
}
function buyspikes() {
  clickUpgrades.spikes.quantity++;
  if (clickUpgrades.spikes.quantity <= 3) {
    orcsSlain -= clickUpgrades.spikes.price[0];
  } else {
    orcsSlain -= clickUpgrades.spikes.price[1];
  }
  if (clickUpgrades.spikes.quantity == 3) {
    clickUpgrades.spikes.priceIndex++;
  }
  callEveryone();
}
function buycompanions() {
  autoUpgrades.companions.quantity++;
  if (autoUpgrades.companions.quantity <= 2) {
    orcsSlain -= autoUpgrades.companions.price[0];
  } else {
    orcsSlain -= autoUpgrades.companions.price[1];
  }
  if (autoUpgrades.companions.quantity == 2) {
    autoUpgrades.companions.priceIndex++;
  }
  callEveryone();
}

// Auto upgrade functions
function collectAutoUpgrades() {
  orcsSlain += autoUpgrades.companions.quantity * 30;
  countKills();
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000);
  countKills();
}

// Helper functions
function callEveryone() {
  countKills();
  updateSwords();
  updateSpikes();
  updateCompanions();
  updateBow();
}
