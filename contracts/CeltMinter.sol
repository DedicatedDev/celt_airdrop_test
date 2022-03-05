//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./GreenFalcoin.sol";

contract CeltMinter is ERC1155 {
    
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds_;
    GreenFalcoin private token_;
    constructor(address tokenContract) ERC1155("https://ipfs.io/ipfs/QmcUmX6rntefrBnJnKnUhD4v668CBPJckS1tFmVf42AgEs?filename=") {
        token_ = GreenFalcoin(tokenContract);
    }

    function claim(uint256 amount) external {
        require(amount<1000,"CeltMinter: exccced amount");
        for (uint256 index = 0; index < amount; index++) {
            _mint(msg.sender, tokenIds_.current(), 1, "0x00");
            tokenIds_.increment();
        }
        airdrop_(msg.sender, 1 ether);
    }

    function airdrop_(address receiver,uint256 amount) private {
        token_.transfer(receiver, amount);
    }

    function uri(uint256 _tokenId) override public view returns (string memory) {
        return string(abi.encodePacked(
            "https://ipfs.io/ipfs/QmcUmX6rntefrBnJnKnUhD4v668CBPJckS1tFmVf42AgEs?filename=",
            Strings.toString(_tokenId),
            ".json"
        ));
    }
}
