addresses = {
          WARRIOR_MINTER: "0xd7510aCf01865F38d4abbEa894374894b73820A7",


}

abis = {
     WARRIOR_MINTER: [
          {
               "inputs": [],
               "stateMutability": "nonpayable",
               "type": "constructor"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "owner",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "approved",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "Approval",
               "type": "event"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "owner",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "operator",
                         "type": "address"
                    },
                    {
                         "indexed": false,
                         "internalType": "bool",
                         "name": "approved",
                         "type": "bool"
                    }
               ],
               "name": "ApprovalForAll",
               "type": "event"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "previousOwner",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "newOwner",
                         "type": "address"
                    }
               ],
               "name": "OwnershipTransferred",
               "type": "event"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "from",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "Transfer",
               "type": "event"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "approve",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "owner",
                         "type": "address"
                    }
               ],
               "name": "balanceOf",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "getApproved",
               "outputs": [
                    {
                         "internalType": "address",
                         "name": "",
                         "type": "address"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "owner",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "operator",
                         "type": "address"
                    }
               ],
               "name": "isApprovedForAll",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "name",
               "outputs": [
                    {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "owner",
               "outputs": [
                    {
                         "internalType": "address",
                         "name": "",
                         "type": "address"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "ownerOf",
               "outputs": [
                    {
                         "internalType": "address",
                         "name": "",
                         "type": "address"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "renounceOwnership",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_class",
                         "type": "uint256"
                    }
               ],
               "name": "safeMint",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "from",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "safeTransferFrom",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "from",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    },
                    {
                         "internalType": "bytes",
                         "name": "_data",
                         "type": "bytes"
                    }
               ],
               "name": "safeTransferFrom",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "operator",
                         "type": "address"
                    },
                    {
                         "internalType": "bool",
                         "name": "approved",
                         "type": "bool"
                    }
               ],
               "name": "setApprovalForAll",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "bytes4",
                         "name": "interfaceId",
                         "type": "bytes4"
                    }
               ],
               "name": "supportsInterface",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "symbol",
               "outputs": [
                    {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "tokenURI",
               "outputs": [
                    {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "from",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "transferFrom",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "newOwner",
                         "type": "address"
                    }
               ],
               "name": "transferOwnership",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          }
     ],

}

chainMap = {
    1:{
        name: "Ethereum Mainnet",
        symbol: "ETH",
    } ,
    3: {
         name: "Ropsten Testnet",
         symbol: "ETH",
    },
    4: {
         name: "Rinkeby Testnet",
         symbol: "ETH",
        },
    5: {
         name: "Goerli Testnet",
         symbol: "ETH",
        },
    42: {
         name: "Kovan Testnet",
         symbol: "ETH",
        },
    137: {
         name: "Polygon Mainnet",
         symbol: "MATIC",
        },
    80001: {
         name: "Mumbai Testnet",
         symbol: "MATIC",
        },
    43114: {
         name: "Avalanche Mainnet",
         symbol: "AVAX",
        },
    43113: {
         name: "Fuji Testnet",
         symbol: "AVAX",
        },
    1088: {
         name: "Metis Andromeda Mainnet",
         symbol: "METIS",
        },
    588: {
         name: "Metis Stardust Testnet",
         symbol: "METIS",
        },
    1313161554: {
         name: "Aurora Mainnet",
         symbol: "AOA",
        },
    1313161555: {
         name: "Aurora Testnet",
         symbol: "AOA",
        },
    56: {
         name: "Binance Smart Chain Mainnet",
         symbol: "BNB",
        },
    97: {
         name: "Binance Smart Chain Testnet",
         symbol: "BNB",
        },
    250: {
         name: "Fantom Opera Mainnet",
         symbol: "FTM",
        },
    4002: {
         name: "Fantom Testnet",
         symbol: "FTM",
    },
    81: {
         name: "Shibuya Mainnet",
         symbol: "SBY",
     },
    }