//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GreenFalcoin is ERC20, Ownable  {
    constructor() ERC20("GreenFalcoin", "Fal") {
       // _mint(address(this), 10000000000);
    }
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}