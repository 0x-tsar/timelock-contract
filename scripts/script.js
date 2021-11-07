const Timelock = artifacts.require("Timelock");

module.exports = async () => {
  try {
    const [account, _] = await web3.eth.getAccounts();
    const timelock = await Timelock.deployed();

    //before borrowing
    const myBalanceEther = await web3.eth.getBalance(account);
    console.log(`my balance ether ${myBalanceEther}`);

    // const depositing = await timelock({
    //   from: account,
    //   value: web3.utils.toWei("1.2"),
    // });
    // console.log(depositing);

    // console.log(timelock.address);
    // await web3.eth.sendTransaction({
    //   from: account,
    //   to: timelock.address,
    //   value: web3.utils.toWei("1"),
    // });

    let contractsBalance = await web3.eth.getBalance(timelock.address);
    console.log(contractsBalance);

    const tx = await timelock.withdraw(
      "0x0000000000000000000000000000000000000000",
      web3.utils.toWei("1")
    );
    console.log(tx);

    contractsBalance = await web3.eth.getBalance(timelock.address);
    console.log(contractsBalance);

    //
  } catch (error) {
    console.log(error);
  }
};
