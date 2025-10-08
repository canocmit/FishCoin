const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "ĐỊA_CHỈ_TOKEN_CỦA_BẠN";
  const [owner] = await ethers.getSigners();

  const coin = await ethers.getContractAt("Coin", tokenAddress);
  const to = "ĐỊA_CHỈ_NHẬN";
  const amount = "5000"; // Số lượng token muốn mint

  const tx = await coin.mint(to, amount);
  await tx.wait();

  console.log(`✅ Minted ${amount} CON cho ví ${to}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
