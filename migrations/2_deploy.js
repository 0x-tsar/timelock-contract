const Timelock = artifacts.require("Timelock");

module.exports = async (deployer) => {
  await deployer.deploy(Timelock);
  const timelock = await Timelock.deployed();
};
