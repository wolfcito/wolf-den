import { ethers } from 'hardhat'

const format = (value: bigint) => ethers.formatUnits(value, 18)

async function main() {
  const [owner, recipient1, recipient2] = await ethers.getSigners()

  console.log(`Using owner: ${owner.address}`)
  console.log(`Recipient 1: ${recipient1.address}`)
  console.log(`Recipient 2: ${recipient2.address}`)

  const Spray = await ethers.getContractFactory('Spray')
  const spray = await Spray.deploy(owner.address)
  await spray.waitForDeployment()

  const sprayAddress = await spray.getAddress()
  console.log(`Spray deployed at: ${sprayAddress}`)

  const nativeRecipients = [recipient1.address, recipient2.address]
  const nativeAmounts = [ethers.parseEther('1'), ethers.parseEther('0.5')]
  const totalNative = nativeAmounts.reduce((acc, amount) => acc + amount, 0n)

  console.log(`Dispersing ${ethers.formatEther(totalNative)} ETH`)
  const beforeNative1 = await ethers.provider.getBalance(recipient1.address)
  const beforeNative2 = await ethers.provider.getBalance(recipient2.address)

  const nativeTx = await spray
    .connect(owner)
    .disperseNative(nativeRecipients, nativeAmounts, { value: totalNative })
  await nativeTx.wait()

  const balance1 = await ethers.provider.getBalance(recipient1.address)
  const balance2 = await ethers.provider.getBalance(recipient2.address)
  console.log(
    `Recipient 1 balance delta: ${ethers.formatEther(
      balance1 - beforeNative1,
    )} ETH`,
  )
  console.log(
    `Recipient 2 balance delta: ${ethers.formatEther(
      balance2 - beforeNative2,
    )} ETH`,
  )

  const USDCw = await ethers.getContractFactory('USDCw')
  const usdcw = await USDCw.deploy(owner.address, owner.address)
  await usdcw.waitForDeployment()

  const usdcwAddress = await usdcw.getAddress()
  console.log(`USDCw deployed at: ${usdcwAddress}`)

  const tokenRecipients = [recipient1.address, recipient2.address]
  const decimals = await usdcw.decimals()
  const tokenAmounts = [
    ethers.parseUnits('100', decimals),
    ethers.parseUnits('50', decimals),
  ]
  const totalTokens = tokenAmounts.reduce((acc, amount) => acc + amount, 0n)

  await usdcw.connect(owner).approve(sprayAddress, totalTokens)
  const beforeToken1 = await usdcw.balanceOf(recipient1.address)
  const beforeToken2 = await usdcw.balanceOf(recipient2.address)

  const tokenTx = await spray
    .connect(owner)
    .disperseToken(usdcwAddress, tokenRecipients, tokenAmounts)
  await tokenTx.wait()

  const tokenBalance1 = await usdcw.balanceOf(recipient1.address)
  const tokenBalance2 = await usdcw.balanceOf(recipient2.address)
  console.log(
    `Recipient 1 USDCw delta: ${format(tokenBalance1 - beforeToken1)}`,
  )
  console.log(
    `Recipient 2 USDCw delta: ${format(tokenBalance2 - beforeToken2)}`,
  )

  console.log('Disperse demo complete.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
