const Token1 = artifacts.require("Token1");
const Timelock = artifacts.require("Timelock");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Timelock, accounts[0]);
  const timelock = await Timelock.deployed();

  await deployer.deploy(Token1);
  const token1 = await Token1.deployed();
};
