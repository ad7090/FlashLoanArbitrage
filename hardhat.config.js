require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require('@openzeppelin/hardhat-upgrades')
require("@nomiclabs/hardhat-etherscan")


require('dotenv').config();
const sepollia = process.env["sepollia"];
const ETHEAPI = process.env["api_eth"];
const provider = process.env["provider"];
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },

    goerli: {
      url: provider,
      accounts: [sepollia]
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 1000000000000
  },
  etherscan: {
    apiKey: ETHEAPI, // Your Etherscan API key
  },
}

