let orcsSlain = 0;
let killElem = document.querySelector("#kill-count");
let swordPrice = document.querySelector("#sword-price");
let bowPrice = document.querySelector("#bow-price");
let spikesPrice = document.querySelector("#spikes-price");

function kill() {
  orcsSlain++;
  orcsSlain += clickUpgrades.sword.quantity * clickUpgrades.sword.damage;
  orcsSlain += clickUpgrades.bow.quantity * clickUpgrades.bow.damage;
  orcsSlain += clickUpgrades.spikes.quantity * clickUpgrades.spikes.damage;

  countKills();
  updateSwords();
}
function countKills() {
  killElem.innerText = orcsSlain;
}
function updateSwords() {
  if (clickUpgrades.sword.price[0]) {
    swordPrice.innerText = clickUpgrades.sword.price[0];
  } else {
    swordPrice.innerText = clickUpgrades.sword.price[1];
  }
}

let clickUpgrades = {
  sword: {
    price: [10, 50],
    damage: 2,
    quantity: 0
  },
  bow: {
    price: [20, 75],
    damage: 5,
    quantity: 0
  },
  spikes: {
    price: [50, 150],
    damage: 40,
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
  countKills();
  updateSwords();
}
function buyspikes() {
  clickUpgrades.spikes.quantity++;
  if (clickUpgrades.spikes.quantity <= 10) {
    orcsSlain -= clickUpgrades.spikes.price[0];
  } else {
    orcsSlain -= clickUpgrades.spikes.price[1];
  }
  countKills();
  updateSwords();
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
