// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/// @custom:security-contact wolfcito.learn+security@gmail.com
contract Spray is Ownable {
    event TokenDispersed(
        address indexed sender,
        address[] recipients,
        uint256[] values,
        address token
    );

    constructor(address initialOwner) Ownable(initialOwner) {}

    function disperse(
        address[] memory _recipients,
        uint256[] memory _amounts
    ) external payable {
        require(
            _recipients.length == _amounts.length,
            'Number of recipients must be equal to the number of corresponding values'
        );

        require(_recipients.length > 0, 'Recipients array cannot be empty');

        uint256 totalValue = 0;

        for (uint256 i = 0; i < _recipients.length; i++) {
            totalValue += _amounts[i];
        }

        require(address(this).balance >= totalValue, 'Insufficient balance');

        for (uint256 i = 0; i < _recipients.length; i++) {
            Address.sendValue(payable(_recipients[i]), _amounts[i]);
        }

        emit TokenDispersed(msg.sender, _recipients, _amounts, address(0));
    }

    function disperseToken(
        address tokenAddress,
        address[] memory _recipients,
        uint256[] memory _amounts
    ) external {
        require(tokenAddress != address(0), 'Invalid token address');

        require(
            _recipients.length == _amounts.length,
            'Number of recipients must be equal to the number of corresponding values'
        );

        require(_recipients.length > 0, 'Recipients array cannot be empty');

        IERC20 token = IERC20(tokenAddress);

        uint256 total = 0;
        for (uint256 i = 0; i < _recipients.length; i++) {
            total += _amounts[i];
        }

        require(
            token.allowance(msg.sender, address(this)) >= total,
            'Not enough tokens approved'
        );

        require(
            token.transferFrom(msg.sender, address(this), total),
            'TransferFrom failed'
        );

        for (uint256 i = 0; i < _recipients.length; i++) {
            require(
                token.transfer(_recipients[i], _amounts[i]),
                'Transfer failed'
            );
        }

        emit TokenDispersed(msg.sender, _recipients, _amounts, tokenAddress);
    }
}
