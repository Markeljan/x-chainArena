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

let WARRIOR_MINTER = new ethers.Contract(addresses.WARRIOR_MINTER, abis.WARRIOR_MINTER, signer);


//await WARRIOR_MINTER.safeMint(account, 2);

};

function onDisconnect() {
    alert("To disconnect, open MetaMask and manualy disconnect.")
}

window.addEventListener('load', async () => {
    init();
  });
