const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with address:", deployer.address);

  const initialSupply = "1000000"; // 1,000,000 CON
  const Coin = await ethers.getContractFactory("Coin");
  const coin = await Coin.deploy(initialSupply);

  await coin.waitForDeployment();
  console.log("✅ Coin deployed at:", await coin.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
