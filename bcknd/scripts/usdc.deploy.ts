import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log(`Deploying contracts with the account: ${deployer.address}`)
  console.log('Adding funds to:', deployer.address)

  // await deployer.sendTransaction({
  //   to: deployer.address,
  //   from: deployer.address,
  //   value: ethers.parseEther('100'), // Add 100 ETH
  // })

  const balance = await ethers.provider.getBalance(deployer.address)
  console.log('New balance:', ethers.formatEther(balance))

  const USDCm = await ethers.getContractFactory('USDCCoin')

  const usdc = await USDCm.deploy()

  await usdc.waitForDeployment()

  console.log(`Spray deployed to: ${await usdc.getAddress()}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
