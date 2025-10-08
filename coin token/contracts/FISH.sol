// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FISH is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("FISH Token", "FIS") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    bool public mintingFinished = false;

    function mint(address to, uint256 amount) public onlyOwner {
        require(!mintingFinished, "Minting is finished");
        _mint(to, amount);
    }

    function finishMinting() public onlyOwner {
        mintingFinished = true;
    }
}
