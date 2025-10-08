const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "0xYOUR_TOKEN_ADDRESS";
  const to = "0xRECIPIENT_ADDRESS";
  const amount = 1000; // số token muốn mint (FIS)

  const FishCoin = await ethers.getContractAt("FishCoin", tokenAddress);
  const tx = await FishCoin.mint(to, ethers.parseUnits(amount.toString(), 18));
  await tx.wait();

  console.log(`✅ Minted ${amount} FIS to ${to}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
