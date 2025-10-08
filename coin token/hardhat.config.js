require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "plasma",
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000000, // tối ưu cho token giao dịch nhiều
      },
      evmVersion: "paris", // tương thích Plasma
    },
  },
  networks: {
    plasma: {
      url: process.env.PLASMA_RPC || "https://rpc.plasma.to",
      chainId: 9745,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      plasma: "PLACEHOLDER",
    },
    customChains: [
      {
        network: "plasma",
        chainId: 9745,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/9745/etherscan",
          browserURL: "https://plasmascan.to",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
