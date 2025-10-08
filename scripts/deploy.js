const { ethers } = require("hardhat");

async function main() {
  const initialSupply = 1000000; // 1 tỷ token
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Fishcoin with account:", deployer.address);

  const Fishcoin = await ethers.getContractFactory("Fishcoin");
  const token = await Fishcoin.deploy(initialSupply);

  await token.waitForDeployment();
  console.log("✅ Fishcoin (FIS) deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
