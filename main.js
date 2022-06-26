let provider;
let signer;
let account;

function init() {
    try {
        if(ethereum.isMetaMask && localStorage.getItem("CACHED_PROVIDER") === "TRUE") {
            fetchAccountData();
        };
    } catch (error) {
        console.log("Error connecting to metamask account:\n", error)
        if (window.confirm("Install Metamask to access Web3 Content. \nClick OK to be directed to metamask.io ")) {
            window.open("http://metamask.io", "_blank");
            };
        }
document.getElementById("btn-connect").addEventListener("click", fetchAccountData)
document.getElementById("btn-disconnect").addEventListener("click", onDisconnect)
};

async function fetchAccountData() {
  try {
      provider = new ethers.providers.Web3Provider(ethereum);
      signer = provider.getSigner();
      account = await provider.send("eth_requestAccounts").then( accounts => {
        return accounts[0];});
      let balance = await provider.getBalance(account);
      let formatedBalance = ethers.BigNumber.from(balance);
      formatedBalance = balance.mod(1e14);
      formatedBalance = ethers.utils.formatEther(balance.sub(formatedBalance));

      document.getElementById("selected-account").innerHTML = `(${account})`;
      document.getElementById("account-balance").innerHTML = `${formatedBalance} ${chainMap[ethereum.networkVersion].symbol}`;
      document.getElementById("network-name").innerHTML = `${chainMap[ethereum.networkVersion].name}`;
      document.getElementById("btn-connect").style.display = "none";
      document.getElementById("btn-disconnect").style.display = "block";
      localStorage.setItem("CACHED_PROVIDER", "TRUE");
  } catch (error) {
      console.log("Error connecting to metamask account:\n", error)
      return
    }

ethereum.on("accountsChanged", (accounts) => {
    if(accounts[0]) {
      fetchAccountData();
    } else {
      localStorage.removeItem("CACHED_PROVIDER");
      document.getElementById("btn-disconnect").style.display = "none";
      document.getElementById("btn-connect").style.display = "block";
    }
});
ethereum.on("chainChanged", (chainId) => {
  fetchAccountData();
});

////////////////////
///MAIN FUNCTIONS///
////////////////////

const GAMEMASTER_READ = new ethers.Contract(addresses.GAMEMASTER, abis.GAMEMASTER, provider);
const GAMEMASTER_WRITE = new ethers.Contract(addresses.GAMEMASTER, abis.GAMEMASTER, signer);


async function createWarrior(_to, _name, _class) {
  await GAMEMASTER_WRITE.createWarrior(_to, _name, _class);
};

let currentDraw;
let userWarriors = await fetchWarriors();
async function fetchWarriors() {
  let WarriorsArray = await GAMEMASTER_WRITE.fetchWarriors();
  currentDraw = 0;
  return WarriorsArray;
}



await drawCard();

async function drawCard() {
  let cardURI = await GAMEMASTER_READ.tokenURI(ethers.utils.formatUnits(userWarriors[currentDraw][0], 0));
let cardData = await
 fetch(cardURI)
  .then(response => response.json())
let cardOBJ = {
  image: "https://ipfs.io/ipfs/" + JSON.stringify(cardData.image).slice(8),
  description: cardData["description"],
  class: cardData["attributes"][0].value,
  vitality: cardData["attributes"][1].value,
  attack: cardData["attributes"][2].value,
  luck: cardData["attributes"][3].value,
}

let cardEl = document.getElementById("warrior-card");
cardEl.innerHTML = 
`<div class="col card bg-dark p-2 text-dark bg-opacity-75 text-white border-light mb-3" style="width: 14rem;">
<img class="card-img-top" src="${cardOBJ.image}" alt="Your Mighty Hero">
<div class="card-body">
  <h5 class="card-text">${cardOBJ.class}</h5>
  <p class="card-text">- Vitality: ${cardOBJ.vitality}</p>
  <p class="card-text">- Attack: ${cardOBJ.attack}</p>
  <p class="card-text">- Luck: ${cardOBJ.luck}</p>
  <div class="row">
    <div class="col">
      <a class="btn btn-dark btn-card border-light mb-3" id="prev-btn">Prev</a>
    </div>
    <div class="col">
      <a class="btn btn-dark btn-card border-light mb-3" id="next-btn">Next</a>
    </div>
  </div>
</div>
</div>`

}


let mapEl0 = document.getElementById("town-map0");
let mapEl1 = document.getElementById("town-map1");
let mapEl2 = document.getElementById("town-map2");
let mapEl3 = document.getElementById("town-map3");
let mapEl4 = document.getElementById("town-map4");
let mapEl5 = document.getElementById("town-map5");
let mapEl6 = document.getElementById("town-map6");
let mapEl7 = document.getElementById("town-map7");
mapEl0.innerHTML += `<a id="arena-btn" class="btn bg-dark map-btn bg-opacity-75 border-light mb-3 text-white">Explore?</a>`
mapEl1.innerHTML += `<a id="arena-btn" class="btn bg-dark map-btn bg-opacity-75 border-light mb-3 text-white">Fight in the Arena!</a>`
mapEl3.innerHTML += `<a id="arena-btn" class="btn bg-dark map-btn bg-opacity-75 border-light mb-3 text-white">Explore?</a>`
mapEl5.innerHTML += `<a id="arena-btn" class="btn bg-dark map-btn2 bg-opacity-75 border-light mb-3 text-white">Explore?</a>`
mapEl6.innerHTML += `<a id="arena-btn" class="btn bg-dark map-btn2 bg-opacity-75 border-light mb-3 text-white">Explore?</a>`



function getRandomName() {
  let ranIndex = Math.floor(Math.random() * randomNames.length)
  return randomNames[ranIndex];
}

document.getElementById("mint-warrior").addEventListener("click", () => {
  createWarrior(account, getRandomName(), "warrior")});
document.getElementById("mint-ranger").addEventListener("click", () => {
  createWarrior(account, getRandomName(), "ranger")});
document.getElementById("mint-wizard").addEventListener("click", () => {
  createWarrior(account, getRandomName(), "wizard")});

document.getElementById("next-btn").addEventListener("click", () => {
  if(currentDraw <= userWarriors.length) {
    console.log(currentDraw, userWarriors.length)
    currentDraw++;
    drawCard()
    console.log(currentDraw)
  }});
document.getElementById("prev-btn").addEventListener("click", () => {
  if(currentDraw >= 0) {
    currentDraw--;
    drawCard()
    console.log(currentDraw)
  }});




};

function onDisconnect() {
    alert("To disconnect, open MetaMask and manualy disconnect.")
}

window.addEventListener('load', async () => {
    init();
  });
