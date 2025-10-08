const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xYOUR_CONTRACT_ADDRESS"; // địa chỉ contract FishCoin đã deploy
  const FishCoin = await ethers.getContractAt("FishCoin", contractAddress);

  console.log("⏳ Đang khoá quyền mint...");
  const tx = await FishCoin.finishMinting();
  await tx.wait();

  console.log("✅ Minting đã bị khoá vĩnh viễn!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
