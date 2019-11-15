let orcs = {
  type: "orc",
  orcsSlain: 0
};
let killElem = document.querySelector("#kill-count");

function kill() {
  orcs.orcsSlain++;
  countKills();
}
function countKills() {
  killElem.innerText = orcs.orcsSlain;
}

let upgrades = {
  sword: {
    price: [10, 50, 100, 200],
    mod: [2, 5, 20, 50],
    modIndex: 0,
    priceIndex: 0
  },
  bow: {
    price: [20, 75, 150, 350],
    mod: [5, 20, 50, 100],
    modIndex: 0,
    priceIndex: 0
  },
  spikes: {
    price: [50, 150, 400, 650],
    mod: [10, 40, 100, 150],
    modIndex: 0,
    priceIndex: 0
  },
  companions: {
    price: [100],
    mod: [20],
    modIndex: 0,
    priceIndex: 0
  }
};
