require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/0b3989b7816f4feeae0d0cc02e3b78dd",
      accounts: [
        "1f9081cf6223447475cfce634c1ad2617cc9526303399f839ced8627247aff7f"
      ],
    },
  }
};
