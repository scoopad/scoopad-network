// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract ScoopadToken {

    string public name = "Scoopad";

    string public symbol = "SCOOP";

    uint8 public decimals = 18;

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(
        address indexed from,
        address indexed to,
        uint256 amount
    );

    constructor(uint256 initialSupply) {

        totalSupply = initialSupply;

        balanceOf[msg.sender] = initialSupply;

        emit Transfer(
            address(0),
            msg.sender,
            initialSupply
        );
    }

    function transfer(
        address to,
        uint256 amount
    ) external returns (bool) {

        require(
            balanceOf[msg.sender] >= amount,
            "Insufficient balance"
        );

        balanceOf[msg.sender] -= amount;

        balanceOf[to] += amount;

        emit Transfer(
            msg.sender,
            to,
            amount
        );

        return true;
    }

    function burn(
        uint256 amount
    ) external {

        require(
            balanceOf[msg.sender] >= amount,
            "Insufficient balance"
        );

        balanceOf[msg.sender] -= amount;

        totalSupply -= amount;

        emit Transfer(
            msg.sender,
            address(0),
            amount
        );
    }

}
