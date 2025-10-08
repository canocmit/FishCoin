require("dotenv").config();
const { NFTStorage, File } = require("nft.storage");
const fs = require("fs");

const API_KEY = process.env.NFT_STORAGE_KEY;

async function main() {
  const client = new NFTStorage({ token: API_KEY });

  const data = await fs.promises.readFile("./FISH.png");

  const metadata = await client.store({
    name: "FISH Token Logo",
    description: "Official logo of FISH token",
    image: new File([data], "FISH.png", { type: "image/png" })
  });

  console.log("✅ IPFS URL:", metadata.url);
}

main().catch(err => console.error("❌ Upload failed:", err));
