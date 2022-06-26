addresses = {
          GAMEMASTER: {
               Mumbai: "0xEB41C24eED74F618863e7dD17de38D61Aa300C8b",
               Cronos: "0x6E19ABD892af274D3fc71dfAaE458756e85a8e3F",

          },
        

}

abis = {
     GAMEMASTER: [
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
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": false,
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    },
                    {
                         "indexed": false,
                         "internalType": "int256",
                         "name": "vitality",
                         "type": "int256"
                    }
               ],
               "name": "BattleTurn",
               "type": "event"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "_to",
                         "type": "address"
                    },
                    {
                         "internalType": "string",
                         "name": "_name",
                         "type": "string"
                    },
                    {
                         "internalType": "string",
                         "name": "_class",
                         "type": "string"
                    }
               ],
               "name": "createWarrior",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "_tokenId",
                         "type": "uint256"
                    }
               ],
               "name": "enterArena",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "one",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "two",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "id",
                         "type": "uint256"
                    },
                    {
                         "internalType": "bytes",
                         "name": "",
                         "type": "bytes"
                    }
               ],
               "name": "onERC721Received",
               "outputs": [
                    {
                         "internalType": "bytes4",
                         "name": "",
                         "type": "bytes4"
                    }
               ],
               "stateMutability": "nonpayable",
               "type": "function"
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
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "name": "activeCombatents",
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
               "inputs": [],
               "name": "arenaCount",
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
               "inputs": [],
               "name": "fetchWarriors",
               "outputs": [
                    {
                         "components": [
                              {
                                   "internalType": "uint256",
                                   "name": "tokenId",
                                   "type": "uint256"
                              },
                              {
                                   "internalType": "string",
                                   "name": "name",
                                   "type": "string"
                              },
                              {
                                   "internalType": "string",
                                   "name": "class",
                                   "type": "string"
                              },
                              {
                                   "internalType": "int256",
                                   "name": "vitality",
                                   "type": "int256"
                              },
                              {
                                   "internalType": "int256",
                                   "name": "attack",
                                   "type": "int256"
                              },
                              {
                                   "internalType": "uint256",
                                   "name": "luck",
                                   "type": "uint256"
                              },
                              {
                                   "internalType": "uint256",
                                   "name": "victories",
                                   "type": "uint256"
                              },
                              {
                                   "internalType": "bool",
                                   "name": "inArena",
                                   "type": "bool"
                              },
                              {
                                   "internalType": "bool",
                                   "name": "alive",
                                   "type": "bool"
                              }
                         ],
                         "internalType": "struct GameMaster.Warrior[]",
                         "name": "",
                         "type": "tuple[]"
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
               "inputs": [],
               "name": "getOnERC721RecievedSelector",
               "outputs": [
                    {
                         "internalType": "bytes4",
                         "name": "",
                         "type": "bytes4"
                    }
               ],
               "stateMutability": "pure",
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
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "name": "tokenIdToPrevOwner",
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
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "name": "warriors",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "tokenId",
                         "type": "uint256"
                    },
                    {
                         "internalType": "string",
                         "name": "name",
                         "type": "string"
                    },
                    {
                         "internalType": "string",
                         "name": "class",
                         "type": "string"
                    },
                    {
                         "internalType": "int256",
                         "name": "vitality",
                         "type": "int256"
                    },
                    {
                         "internalType": "int256",
                         "name": "attack",
                         "type": "int256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "luck",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "victories",
                         "type": "uint256"
                    },
                    {
                         "internalType": "bool",
                         "name": "inArena",
                         "type": "bool"
                    },
                    {
                         "internalType": "bool",
                         "name": "alive",
                         "type": "bool"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          }
     ],
     
     //[
     //      {
     //           "inputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "constructor"
     //      },
     //      {
     //           "anonymous": false,
     //           "inputs": [
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "owner",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "approved",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": true,
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "Approval",
     //           "type": "event"
     //      },
     //      {
     //           "anonymous": false,
     //           "inputs": [
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "owner",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "operator",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": false,
     //                     "internalType": "bool",
     //                     "name": "approved",
     //                     "type": "bool"
     //                }
     //           ],
     //           "name": "ApprovalForAll",
     //           "type": "event"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "to",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "approve",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "_to",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "string",
     //                     "name": "_name",
     //                     "type": "string"
     //                },
     //                {
     //                     "internalType": "string",
     //                     "name": "_class",
     //                     "type": "string"
     //                }
     //           ],
     //           "name": "createWarrior",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "anonymous": false,
     //           "inputs": [
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "previousOwner",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "newOwner",
     //                     "type": "address"
     //                }
     //           ],
     //           "name": "OwnershipTransferred",
     //           "type": "event"
     //      },
     //      {
     //           "inputs": [],
     //           "name": "renounceOwnership",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "from",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "address",
     //                     "name": "to",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "safeTransferFrom",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "from",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "address",
     //                     "name": "to",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                },
     //                {
     //                     "internalType": "bytes",
     //                     "name": "_data",
     //                     "type": "bytes"
     //                }
     //           ],
     //           "name": "safeTransferFrom",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "operator",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "bool",
     //                     "name": "approved",
     //                     "type": "bool"
     //                }
     //           ],
     //           "name": "setApprovalForAll",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "anonymous": false,
     //           "inputs": [
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "from",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": true,
     //                     "internalType": "address",
     //                     "name": "to",
     //                     "type": "address"
     //                },
     //                {
     //                     "indexed": true,
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "Transfer",
     //           "type": "event"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "from",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "address",
     //                     "name": "to",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "transferFrom",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "newOwner",
     //                     "type": "address"
     //                }
     //           ],
     //           "name": "transferOwnership",
     //           "outputs": [],
     //           "stateMutability": "nonpayable",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "owner",
     //                     "type": "address"
     //                }
     //           ],
     //           "name": "balanceOf",
     //           "outputs": [
     //                {
     //                     "internalType": "uint256",
     //                     "name": "",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [],
     //           "name": "fetchWarriors",
     //           "outputs": [
     //                {
     //                     "components": [
     //                          {
     //                               "internalType": "uint256",
     //                               "name": "tokenId",
     //                               "type": "uint256"
     //                          },
     //                          {
     //                               "internalType": "string",
     //                               "name": "name",
     //                               "type": "string"
     //                          },
     //                          {
     //                               "internalType": "string",
     //                               "name": "class",
     //                               "type": "string"
     //                          },
     //                          {
     //                               "internalType": "uint256",
     //                               "name": "vitality",
     //                               "type": "uint256"
     //                          },
     //                          {
     //                               "internalType": "uint256",
     //                               "name": "attack",
     //                               "type": "uint256"
     //                          },
     //                          {
     //                               "internalType": "uint256",
     //                               "name": "luck",
     //                               "type": "uint256"
     //                          },
     //                          {
     //                               "internalType": "uint256",
     //                               "name": "victories",
     //                               "type": "uint256"
     //                          },
     //                          {
     //                               "internalType": "bool",
     //                               "name": "alive",
     //                               "type": "bool"
     //                          }
     //                     ],
     //                     "internalType": "struct GameMaster.Warrior[]",
     //                     "name": "",
     //                     "type": "tuple[]"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "getApproved",
     //           "outputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "",
     //                     "type": "address"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "owner",
     //                     "type": "address"
     //                },
     //                {
     //                     "internalType": "address",
     //                     "name": "operator",
     //                     "type": "address"
     //                }
     //           ],
     //           "name": "isApprovedForAll",
     //           "outputs": [
     //                {
     //                     "internalType": "bool",
     //                     "name": "",
     //                     "type": "bool"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [],
     //           "name": "name",
     //           "outputs": [
     //                {
     //                     "internalType": "string",
     //                     "name": "",
     //                     "type": "string"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [],
     //           "name": "owner",
     //           "outputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "",
     //                     "type": "address"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "ownerOf",
     //           "outputs": [
     //                {
     //                     "internalType": "address",
     //                     "name": "",
     //                     "type": "address"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "bytes4",
     //                     "name": "interfaceId",
     //                     "type": "bytes4"
     //                }
     //           ],
     //           "name": "supportsInterface",
     //           "outputs": [
     //                {
     //                     "internalType": "bool",
     //                     "name": "",
     //                     "type": "bool"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [],
     //           "name": "symbol",
     //           "outputs": [
     //                {
     //                     "internalType": "string",
     //                     "name": "",
     //                     "type": "string"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "tokenURI",
     //           "outputs": [
     //                {
     //                     "internalType": "string",
     //                     "name": "",
     //                     "type": "string"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      },
     //      {
     //           "inputs": [
     //                {
     //                     "internalType": "uint256",
     //                     "name": "",
     //                     "type": "uint256"
     //                }
     //           ],
     //           "name": "warriors",
     //           "outputs": [
     //                {
     //                     "internalType": "uint256",
     //                     "name": "tokenId",
     //                     "type": "uint256"
     //                },
     //                {
     //                     "internalType": "string",
     //                     "name": "name",
     //                     "type": "string"
     //                },
     //                {
     //                     "internalType": "string",
     //                     "name": "class",
     //                     "type": "string"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "vitality",
     //                     "type": "uint256"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "attack",
     //                     "type": "uint256"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "luck",
     //                     "type": "uint256"
     //                },
     //                {
     //                     "internalType": "uint256",
     //                     "name": "victories",
     //                     "type": "uint256"
     //                },
     //                {
     //                     "internalType": "bool",
     //                     "name": "alive",
     //                     "type": "bool"
     //                }
     //           ],
     //           "stateMutability": "view",
     //           "type": "function"
     //      }
     // ],

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
         name: "Mumbai",
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
     338: {
          name: "Cronos",
          symbol: "TCRO",
     }
    }

randomNames = ["Squire Isac",
    "Prince Josef",
     "Prince Ernaldus",
     "Prince Helies",
     "Cardinal Blavier",
     "Admiral Giraud",
     "Archbishop Hugelin",
     "Reeve Theobaldus",
     "Cardinal Jakke",
     "Baron Geronim",
     "Archbishop Hamlet",
     "King Elys",
     "King Terric",
     "Baronet Hamon",
     "Bishop Tancard",
     "Earl Saerus",
     "Earl Nele",
     "Reeve Timm",
     "Monk Tolly",
     "Baron Ouein",]