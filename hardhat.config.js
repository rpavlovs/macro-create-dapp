require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/7c66140762d349e680b83ef4be5cd3e9",
      accounts: [`0x7e6c741770f65c0e65424b3317b57141082307f794833ceff91f64e7d77b3006`]
    }
  }
};
