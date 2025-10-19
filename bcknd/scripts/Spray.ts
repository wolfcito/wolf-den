import { ethers, upgrades } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const balance = await ethers.provider.getBalance(deployer.address)
  console.log('Account balance:', balance.toString())

  const Spray = await ethers.getContractFactory('Spray')

  const spray = await Spray.deploy(deployer.address)

  await spray.waitForDeployment()

  console.log(`Spray deployed to: ${await spray.getAddress()}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
