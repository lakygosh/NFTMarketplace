// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "./ERC721.sol";
import "./ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721Enumerable, Ownable {
    using Strings for uint256;

    mapping(string => uint8) existingURIs;
    mapping(uint256 => address) public holderOf;

    mapping(string => address) private collectionOwners;


    address public artist;
    uint256 public royalityFee;
    uint256 public supply = 0;
    uint256 public collectionCounter = 0;
    uint256 public totalTx = 0;
    uint256 public cost = 0.01 ether;

    event Sale(
        uint256 id,
        address indexed owner,
        uint256 cost,
        string metadataURI,
        uint256 timestamp,
        Collection collection
    );

    struct Transaction {
        uint256 id;
        address owner;
        uint256 cost;
        string title;
        string description;
        string metadataURI;
        uint256 timestamp;
        Collection collection;
    }

    struct Collection {
        uint256 id;
        string name;
        string description;
        address owner;
    }

    Transaction[] transactions;
    Transaction[] minted;

    Collection[] createdCollections;

    constructor (
        string memory _name,
        string memory _symbol,
        uint256 _royalityFee,
        address _artist
    ) ERC721(_name, _symbol) {
        royalityFee = _royalityFee;
        artist = _artist;
    }

    function createCollection(string memory collectionName, string memory description) external {
        require(collectionOwners[collectionName] == address(0), "Collection already exists");
        collectionOwners[collectionName] = msg.sender;

        collectionCounter++;

        createdCollections.push(
            Collection(
                collectionCounter,
                collectionName,
                description,
                msg.sender
            )
        );
    }

    function payToMint(string memory title, string memory description, string memory metadataURI, uint256 salesPrice, string memory collectionName) external payable {
        require(msg.value >= cost, "Ether too low for minting!");
        require(existingURIs[metadataURI] == 0, "This NFT is already minted!");
        require(msg.sender != owner(), "Sales not allowed!");

        uint256 royality = (msg.value * royalityFee) / 100;
        payTo(artist, royality);
        payTo(owner(), (msg.value - royality));

        supply++;
        Collection memory collection = getCollection(collectionName);

        minted.push(
            Transaction(
                supply,
                msg.sender,
                salesPrice,
                title,
                description,
                metadataURI,
                block.timestamp,
                collection
            )      
        );

        emit Sale(supply, msg.sender, msg.value, metadataURI, block.timestamp, collection);

        _safeMint(msg.sender, supply);
        existingURIs[metadataURI] = 1;
        holderOf[supply] = msg.sender;
    }

    function getCollection(string memory collectionName) internal view returns(Collection memory)
    {
        for(uint256 i = 0; i < createdCollections.length; i++)
        {
            if(keccak256(bytes(collectionName)) == keccak256(bytes(createdCollections[i].name)) )
            {
                return createdCollections[i];
            }
        }
        return Collection(0, "", "", msg.sender);
    }

    function payToBuy(uint256 id, string memory collectionName) external payable {
        require(msg.value >= minted[id - 1].cost, "Ether too low for purchase");
        require(msg.sender != minted[id - 1].owner, "Operation NOT Allowed!");

        uint256 royality = (msg.value * royalityFee) / 100;
        payTo(artist, royality);
        payTo(minted[id - 1].owner, (msg.value - royality));

        totalTx++;
        Collection memory collection = getCollection(collectionName);
        
        transactions.push(
            Transaction({
                id: totalTx,
                owner: msg.sender,
                cost: msg.value,
                title: minted[id - 1].title,
                description: minted[id - 1].description,
                metadataURI: minted[id - 1].metadataURI,
                timestamp: block.timestamp,
                collection: collection
            })
        );

        emit Sale(totalTx, msg.sender, msg.value, minted[id - 1].metadataURI, block.timestamp, collection);
    }

    function changePrice(uint256 id, uint256 newPrice) external returns (bool){
        require(newPrice > 0 ether, "Ether too low!");
        require(msg.sender == minted[id - 1].owner, "Operation NOT Allowed!");

        minted[id - 1].cost = newPrice;
        return true;
    }

    function payTo(address reciever, uint256 amount) internal {
        (bool success, ) = payable(reciever).call{value: amount}("");
        require(success);
    }

    function getAllNFTs() external view returns (Transaction[] memory) {
        return minted;
    }

    function getNFTDetails(uint256 id) external view returns (Transaction memory) {
        return minted[id - 1];
    }

    function getAllTransactions() external view returns (Transaction[] memory) {
        return transactions;
    }

    function getCollectionDetails(uint256 id) external view returns (Collection memory) {
        return createdCollections[id - 1];
    }

    function getAllCollectinos() external view returns (Collection[] memory) {
        return createdCollections;
    }

  

    
}