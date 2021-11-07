// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Timelock {
    uint256 public constant duration = 15 minutes;
    uint256 public immutable end;
    address payable public immutable owner;

    constructor(address payable _owner) {
        end = block.timestamp + duration;
        owner = _owner;
    }

    function deposit(address _token, uint256 _amount) external {
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    }

    //receive some ether
    receive() external payable {}

    function withdraw(address _token, uint256 _amount) external {
        require(msg.sender == owner, "only owner");
        require(block.timestamp >= end, "too early");
        //convention meaning _token == address(0) we want to retrieve ether
        if (_token == address(0)) {
            owner.transfer(_amount);
        } else {
            IERC20(_token).transfer(owner, _amount);
        }
    }
}
