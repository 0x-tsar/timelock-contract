const Timelock = artifacts.require("Timelock");

module.exports = async () => {
  try {
    const [accounts, _] = await web3.eth.getAccounts();
    const timelock = await Timelock.deployed();
    console.log("deployed");
    //
    console.log(timelock);
  } catch (error) {
    console.log(error);
  }
};
