# Spray

Spray is a smart contract that enables efficient distribution of main tokens to multiple recipients in a single transaction, providing a gas-efficient solution for batch token transfers.

## Features

- Distribute Native token to multiple recipients in a single transaction
- Distribute ERC20 tokens to multiple recipients in a single transaction
- Gas-efficient batch transfers
- OpenZeppelin security features


## Usage

### Disperse Native token

```solidity
function disperse(
    address[] memory _recipients,
    uint256[] memory _amounts
) external payable
```

### Disperse ERC20 Tokens

```solidity
function disperseToken(
    address tokenAddress,
    address[] memory _recipients,
    uint256[] memory _amounts
) external
```

## Development

### Available Scripts

- `pnpm flattenBase`: Flattens the Spray contract

### Testing

```bash
pnpm hardhat test
```

### Networks

Hardhat is configured for:

- `hardhat`: in-memory network for local iterations
- `localhost`: connects to an external node at `http://127.0.0.1:8545`
- `alfajores`: Celo Alfajores testnet (chainId 44787)
- `celo`: Celo mainnet (chainId 42220)

Create a `.env` file when deploying or verifying on Celo networks:

```bash
CELO_PRIVATE_KEY=0x...
CELOSCAN_API_KEY=...
```

Leave the values empty to compile locally without injecting live accounts.


## Security

For security concerns, please contact: wolfcito.learn+security@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
