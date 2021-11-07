// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Timelock is Ownable {
    uint256 public constant duration = 15 minutes;
    uint payable public immutable owner;

    constructor(address payable _owner) {
        end = block.timestamp + duration;
        owner = _owner;
    }


    function deposit(address _token, uint _amount) external{
        IERC20(_token).transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 amount) external onlyOwner {}
}
