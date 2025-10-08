const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "ĐỊA_CHỈ_TOKEN_CỦA_BẠN";
  const [owner] = await ethers.getSigners();

  const coin = await ethers.getContractAt("Coin", tokenAddress);

  console.log("🔐 Đang khóa chức năng mint...");
  const tx = await coin.lockMint();
  await tx.wait();

  console.log("✅ Minting đã bị khóa vĩnh viễn!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
