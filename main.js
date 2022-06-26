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

let cardURI = await GAMEMASTER_READ.tokenURI(0);
let cardData = await
 fetch(cardURI)
  .then(response => response.json())
console.log(cardData)
console.log(cardData["attributes"][0].value)
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
`<div class="card" style="width: 12rem;">
<img class="card-img-top" src="${cardOBJ.image}" alt="Your Mighty Hero">
<div class="card-body">
  <h5 class="card-text">${cardOBJ.class}</h5>
  <p class="card-text">- Vitality: ${cardOBJ.vitality}</p>
  <p class="card-text">- Attack: ${cardOBJ.attack}</p>
  <p class="card-text">- Luck: ${cardOBJ.luck}</p>
  <div class="row">
    <div class="col">
      <a class="btn btn-primary btn-card">Prev</a>
    </div>
    <div class="col">
      <a class="btn btn-primary btn-card">Next</a>
    </div>
  </div>
</div>
</div>`

let mapEl = document.getElementById("town-map0");
mapEl.innerHTML += `<a id="mint-btn" class="btn btn-primary map-btn">Mint a Warrior!</a>`

document.getElementById("mint-btn").addEventListener("click", () => {
createWarrior(account, "Gabe", "warrior")
});


mapEl.innerHTML += `<a id="arena-btn" class="btn btn-primary map-btn">Fight in the Arena!</a>`

};

function onDisconnect() {
    alert("To disconnect, open MetaMask and manualy disconnect.")
}

window.addEventListener('load', async () => {
    init();
  });
