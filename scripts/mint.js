const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  // 👉 Nhập địa chỉ token FISH đã deploy và ví người nhận
  const tokenAddress = "0xYOUR_FISH_CONTRACT_ADDRESS";
  const recipient = "0xWALLET_RECEIVE_TOKEN";
  const amount = 1000; // số token muốn mint thêm

  const fish = await ethers.getContractAt("FISH", tokenAddress);

  console.log(`Minting ${amount} FIS cho ${recipient}...`);

  const tx = await fish.mint(recipient, amount);
  await tx.wait();

  console.log(`✅ Mint thành công ${amount} FIS cho ${recipient}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
