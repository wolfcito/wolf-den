// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/// @custom:security-contact wolfcito.learn+security@gmail.com
contract Spray is Ownable {
    event NativeDispersed(
        address indexed sender,
        address[] recipients,
        uint256[] amounts,
        uint256 totalValue
    );

    event TokenDispersed(
        address indexed sender,
        address token,
        address[] recipients,
        uint256[] amounts,
        uint256 totalValue
    );

    constructor(address initialOwner) Ownable(initialOwner) {}

    function disperseNative(
        address[] memory _recipients,
        uint256[] memory _amounts
    ) external payable {
        uint256 totalValue = _validateRecipients(_recipients, _amounts);
        require(msg.value == totalValue, 'Incorrect ether value supplied');

        require(address(this).balance >= totalValue, 'Insufficient balance');

        for (uint256 i = 0; i < _recipients.length; i++) {
            Address.sendValue(payable(_recipients[i]), _amounts[i]);
        }

        emit NativeDispersed(msg.sender, _recipients, _amounts, totalValue);
    }

    function disperseToken(
        address tokenAddress,
        address[] memory _recipients,
        uint256[] memory _amounts
    ) external {
        require(tokenAddress != address(0), 'Invalid token address');

        uint256 totalValue = _validateRecipients(_recipients, _amounts);

        IERC20 token = IERC20(tokenAddress);

        require(
            token.allowance(msg.sender, address(this)) >= totalValue,
            'Not enough tokens approved'
        );

        require(
            token.transferFrom(msg.sender, address(this), totalValue),
            'TransferFrom failed'
        );

        for (uint256 i = 0; i < _recipients.length; i++) {
            require(
                token.transfer(_recipients[i], _amounts[i]),
                'Transfer failed'
            );
        }

        emit TokenDispersed(
            msg.sender,
            tokenAddress,
            _recipients,
            _amounts,
            totalValue
        );
    }

    function _validateRecipients(
        address[] memory recipients,
        uint256[] memory amounts
    ) private pure returns (uint256 totalValue) {
        require(
            recipients.length == amounts.length,
            'Number of recipients must be equal to the number of corresponding values'
        );

        require(recipients.length > 0, 'Recipients array cannot be empty');

        for (uint256 i = 0; i < recipients.length; i++) {
            totalValue += amounts[i];
        }
    }
}
