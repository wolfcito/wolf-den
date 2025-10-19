import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
require('hardhat-deploy')
import '@openzeppelin/hardhat-upgrades'

import * as dotenv from 'dotenv'
dotenv.config()

const { CELO_PRIVATE_KEY, CELOSCAN_API_KEY } = process.env

const resolveAccounts = (key?: string) =>
  key && key.trim().length > 0 ? [key] : []

const config: HardhatUserConfig = {
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
    },
    celo: {
      url: 'https://forno.celo.org',
      chainId: 42220,
      accounts: resolveAccounts(CELO_PRIVATE_KEY),
    },
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      chainId: 44787,
      accounts: resolveAccounts(CELO_PRIVATE_KEY),
    },
  },
  solidity: {
    version: '0.8.20',
    settings: {
      // optimizer: {
      //   enabled: true,
      //   runs: 200,
      // },
      evmVersion: 'london',
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      celo: CELOSCAN_API_KEY ?? '',
      alfajores: CELOSCAN_API_KEY ?? '',
    },
    customChains: [
      {
        network: 'celo',
        chainId: 42220,
        urls: {
          apiURL: 'https://api.celoscan.io/api',
          browserURL: 'https://celoscan.io',
        },
      },
      {
        network: 'alfajores',
        chainId: 44787,
        urls: {
          apiURL: 'https://api-alfajores.celoscan.io/api',
          browserURL: 'https://alfajores.celoscan.io',
        },
      },
    ],
  },
}

export default config
