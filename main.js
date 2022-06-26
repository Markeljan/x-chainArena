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
  await GAMEMASTER_WRITE.createWarrior(_to, _name. _class);
};

let cardEl = document.querySelector(".warrior-card");
cardEl.innerHTML = 
`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

 let mapEl = document.querySelector(".town-map");
 mapEl.innerHTML = `<a class="btn btn-primary">Mint a Warrior!</a>`

};

function onDisconnect() {
    alert("To disconnect, open MetaMask and manualy disconnect.")
}

window.addEventListener('load', async () => {
    init();
  });
