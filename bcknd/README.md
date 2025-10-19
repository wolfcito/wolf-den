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

- `pnpm flattenBase`: Flattens the Spray contract into `out/SprayFlatten.sol`
- `pnpm run deploy:localhost`: Deploys `Spray.ts` against a local node (`localhost` network)
- `pnpm run deploy:alfajores`: Deploys `Spray.ts` to Celo Alfajores (requires `CELO_PRIVATE_KEY`)
- `pnpm run deploy:celo`: Deploys `Spray.ts` to Celo mainnet (requires `CELO_PRIVATE_KEY`)
- `pnpm run verify:alfajores -- <address> [constructor args...]`: Verifies a deployment on Celo Alfajores
- `pnpm run verify:celo -- <address> [constructor args...]`: Verifies a deployment on Celo mainnet

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

Leave the values empty to compile locally without injecting live accounts. Populate them when deploying or verifying live networks.

### Deployment

Deploy the Spray contract using the bundled Hardhat scripts:

```bash
pnpm run deploy:alfajores
# or
pnpm run deploy:celo
```

Each command runs `scripts/Spray.ts`. Make sure `CELO_PRIVATE_KEY` is funded on the target chain before deploying.

### Contract Verification

1. Deploy the contract and note the deployed address.
2. Run the verification command for the target network, passing the address (and constructor arguments if any):

```bash
pnpm run verify:alfajores -- 0xYourDeploymentAddress
# or
pnpm run verify:celo -- 0xYourDeploymentAddress
```

Hardhat uses `CELOSCAN_API_KEY` for both networks. Constructor arguments should match the deployment order.


## Security

For security concerns, please contact: wolfcito.learn+security@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
