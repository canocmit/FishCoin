const { ethers } = require("hardhat");

async function main() {
  const initialSupply = 1000000000; // 1 tỷ token
  const [deployer] = await ethers.getSigners();

  console.log("Deploying FishCoin with account:", deployer.address);

  const FishCoin = await ethers.getContractFactory("FishCoin");
  const token = await FishCoin.deploy(initialSupply);

  await token.waitForDeployment();
  console.log("✅ FishCoin (FIS) deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
