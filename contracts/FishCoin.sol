// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FishCoin is ERC20, Ownable {
    bool public mintingFinished = false;

    constructor(uint256 initialSupply) ERC20("FishCoin", "FIS") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    modifier canMint() {
        require(!mintingFinished, "Minting has been permanently disabled");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner canMint {
        _mint(to, amount);
    }

    function finishMinting() external onlyOwner {
        mintingFinished = true;
    }
}
