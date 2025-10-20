import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { expect } from 'chai'
import { ethers } from 'hardhat'

async function deploySprayFixture() {
  const [owner, recipient1, recipient2, otherAccount] = await ethers.getSigners()

  const Spray = await ethers.getContractFactory('Spray')
  const spray = await Spray.deploy(owner.address)

  const USDCw = await ethers.getContractFactory('USDCw')
  const usdcw = await USDCw.deploy(owner.address, owner.address)

  return {
    spray,
    usdcw,
    owner,
    recipient1,
    recipient2,
    otherAccount,
  }
}

describe('Spray', () => {
  describe('disperseNative', () => {
    it('distributes native currency to multiple recipients', async () => {
      const { spray, owner, recipient1, recipient2 } = await loadFixture(
        deploySprayFixture,
      )

      const recipients = [recipient1.address, recipient2.address]
      const amounts = [ethers.parseEther('1'), ethers.parseEther('2')]
      const valueSent = amounts[0] + amounts[1]

      const provider = ethers.provider
      const contractAddress = await spray.getAddress()
      const beforeRecipient1 = await provider.getBalance(recipient1.address)
      const beforeRecipient2 = await provider.getBalance(recipient2.address)

      const tx = await spray
        .connect(owner)
        .disperseNative(recipients, amounts, { value: valueSent })
      await tx.wait()

      expect(await provider.getBalance(contractAddress)).to.equal(0n)
      expect(await provider.getBalance(recipient1.address)).to.equal(
        beforeRecipient1 + amounts[0],
      )
      expect(await provider.getBalance(recipient2.address)).to.equal(
        beforeRecipient2 + amounts[1],
      )

      await expect(tx)
        .to.emit(spray, 'NativeDispersed')
        .withArgs(owner.address, recipients, amounts, valueSent)
    })

    it('reverts when recipients and amounts length differ', async () => {
      const { spray, owner, recipient1, recipient2 } = await loadFixture(
        deploySprayFixture,
      )

      await expect(
        spray
          .connect(owner)
          .disperseNative(
            [recipient1.address, recipient2.address],
            [ethers.parseEther('1')],
            { value: ethers.parseEther('1') },
          ),
      ).to.be.revertedWith(
        'Number of recipients must be equal to the number of corresponding values',
      )
    })

    it('reverts when ether sent does not match total amount', async () => {
      const { spray, owner, recipient1, recipient2 } = await loadFixture(
        deploySprayFixture,
      )

      await expect(
        spray
          .connect(owner)
          .disperseNative(
            [recipient1.address, recipient2.address],
            [ethers.parseEther('1'), ethers.parseEther('2')],
            { value: ethers.parseEther('2') },
          ),
      ).to.be.revertedWith('Incorrect ether value supplied')

      await expect(
        spray
          .connect(owner)
          .disperseNative(
            [recipient1.address, recipient2.address],
            [ethers.parseEther('1'), ethers.parseEther('2')],
            { value: ethers.parseEther('4') },
          ),
      ).to.be.revertedWith('Incorrect ether value supplied')
    })
  })

  describe('disperseToken', () => {
    it('distributes ERC20 tokens after approval', async () => {
      const { spray, usdcw, owner, recipient1, recipient2 } =
        await loadFixture(deploySprayFixture)

      const recipients = [recipient1.address, recipient2.address]
      const amounts = [ethers.parseUnits('100', 18), ethers.parseUnits('200', 18)]
      const total = amounts[0] + amounts[1]

      await usdcw.connect(owner).approve(await spray.getAddress(), total)

      const tx = await spray
        .connect(owner)
        .disperseToken(await usdcw.getAddress(), recipients, amounts)

      expect(await usdcw.balanceOf(recipient1.address)).to.equal(amounts[0])
      expect(await usdcw.balanceOf(recipient2.address)).to.equal(amounts[1])

      await expect(tx)
        .to.emit(spray, 'TokenDispersed')
        .withArgs(
          owner.address,
          await usdcw.getAddress(),
          recipients,
          amounts,
          total,
        )
    })

    it('reverts when allowance is insufficient', async () => {
      const { spray, usdcw, owner, recipient1, recipient2 } =
        await loadFixture(deploySprayFixture)

      await expect(
        spray
          .connect(owner)
          .disperseToken(
            await usdcw.getAddress(),
            [recipient1.address, recipient2.address],
            [ethers.parseUnits('1', 18), ethers.parseUnits('2', 18)],
          ),
      ).to.be.revertedWith('Not enough tokens approved')
    })
  })
})
