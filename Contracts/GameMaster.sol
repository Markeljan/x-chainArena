// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GameMaster is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("x-chain Arena", "xArena") {}

    struct Warrior {
        uint256 tokenId;
        string name;
        string class;
        int256 vitality;
        int256 attack;
        uint256 luck;
        uint256 victories;
        bool alive;
    }
    
    Warrior[] public warriors;

    mapping(uint256 => Warrior) tokenIdToWarrior;
    mapping(uint256 => address) tokenIdToPrevOwner;
    uint public arenaCount = 0;
    uint[] public activeCombatents;

    event BattleTurn(uint256 tokenId, int256 vitality);
    

    bytes32 warriorEncoded = keccak256(abi.encodePacked("warrior"));
    bytes32 rangerEncoded  = keccak256(abi.encodePacked("ranger"));
    bytes32 wizardEncoded  = keccak256(abi.encodePacked("wizard"));

 
    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/bafybeibgsbmvafuq5xchnpydd5ypdg4rrpbu5dy6rjdiou7v6m3ons5ega/newMD";
    }

    function createWarrior(address _to, string memory _name, string memory _class) public {
        //parse class to available URI classId's
        bytes32 classEncoded = keccak256(abi.encodePacked(_class));
        uint256 classId;
        classEncoded == warriorEncoded ? classId = 0 : 
        classEncoded == rangerEncoded ? classId = 1 : 
        classEncoded == wizardEncoded ? classId = 2: classId = 9;
        require (classId != 9, "Wrong class input");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(_to, tokenId);
        string memory classIdString = Strings.toString(classId);
        _setTokenURI(tokenId, classIdString);
        
        //Modify base stats here for chain-dependent bonuses
        Warrior memory newWarrior = Warrior(tokenId, _name, _class, 10, 1, 0, 0, true);
        warriors.push(newWarrior);
        tokenIdToWarrior[tokenId] = newWarrior;
       
    }

    function fetchWarriors() public view returns (Warrior[] memory) {
        Warrior[] memory ownedWarriors = new Warrior[](balanceOf(msg.sender));

        uint256 newIndex = 0;
        for(uint256 i = 0; i < warriors.length; i++) {
            if( ownerOf(i) != msg.sender ) continue;
            ownedWarriors[newIndex] = warriors[i];
            newIndex++;
        }
            return ownedWarriors;
    }
    
    function enterArena(uint256 _tokenId) public payable {
        require(ownerOf(_tokenId) == msg.sender, "You are not the owner of that warrior");
        require( arenaCount <= 1, "Arena is Full!");
        safeTransferFrom(msg.sender,address(this), _tokenId);
        tokenIdToPrevOwner[_tokenId] = msg.sender;
        arenaCount ++;
        
        if(arenaCount == 1) {
            activeCombatents[0] = _tokenId;
        }
        if(arenaCount == 2) {
            activeCombatents[1] = _tokenId;
            startArena();
        }
    }

    function startArena() public returns (string memory){
        Warrior memory char1 = tokenIdToWarrior[activeCombatents[0]];
        Warrior memory char2 = tokenIdToWarrior[activeCombatents[1]];
        uint256 randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, tokenIdToPrevOwner[0])));
        randomNum = randomNum % 100 + 1;
            if (randomNum >=  (50 - char1.luck)) { 
                char1.vitality --;
            } else {
                char2.vitality --;
            }
        for(uint256 i = 0; i < 5; i++ ) {
            char1.vitality -= char2.attack;
            emit BattleTurn(char1.tokenId, char1.vitality);
            char2.vitality -= char1.attack;
            emit BattleTurn(char2.tokenId, char2.vitality);
        }    
        if(char1.vitality - char2.vitality == 0)
        return("draw");
        else {
            if(char1.vitality - char2.vitality > 0 )
        return("char1 wins!");
        else {
        return("char2 wins!");
        }
        }
    }

  


    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function getOnERC721RecievedSelector() pure public returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }

    
}