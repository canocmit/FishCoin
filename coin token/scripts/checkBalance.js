const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "0xYOUR_FISH_CONTRACT_ADDRESS";
  const walletAddress = "0xWALLET_TO_CHECK";

  const fish = await ethers.getContractAt("FISH", tokenAddress);

  const balance = await fish.balanceOf(walletAddress);
  const decimals = await fish.decimals();
  const formatted = ethers.formatUnits(balance, decimals);

  console.log(`💰 Số dư của ${walletAddress}: ${formatted} FIS`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
