const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory("Box");
  const instance = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await instance.waitForDeployment();
  console.log('Box deployed to:',instance.target);

}

main();
