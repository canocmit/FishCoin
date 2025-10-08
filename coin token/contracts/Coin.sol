// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Coin is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Coin", "CON") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    // Khóa vĩnh viễn quyền mint (chủ động từ bỏ quyền owner)
    function lockMint() public onlyOwner {
        renounceOwnership();
    }
}
