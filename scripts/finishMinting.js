const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const tokenAddress = "0x38e3260Aa6f4D9Ba3669aC7EfECBF3c1A1E2F4f4";

  const fish = await ethers.getContractAt("FISH", tokenAddress);

  console.log("⛔ Khoá minting...");
  const tx = await fish.finishMinting();
  await tx.wait();

  console.log("✅ Minting đã bị khoá vĩnh viễn!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
