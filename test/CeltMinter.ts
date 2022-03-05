import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { ethers } from "hardhat"
import { CeltMinter, CeltMinter__factory, GreenFalcoin, GreenFalcoin__factory } from "../typechain"

describe("CeltMinter", ()=>{

    let greenFalcoinFactory:GreenFalcoin__factory
    let greenFalcoin:GreenFalcoin

    let celtMinterFactory:CeltMinter__factory
    let celtMinter:CeltMinter
    let accounts:SignerWithAddress[]

    before( async() =>{
        accounts = await ethers.getSigners();
    })

    it("deploy and mint nft", async()=>{
        greenFalcoinFactory = await ethers.getContractFactory("GreenFalcoin");
        greenFalcoin = await greenFalcoinFactory.deploy();
        await greenFalcoin.deployed();
        
        celtMinterFactory = await ethers.getContractFactory("CeltMinter");
        celtMinter = await celtMinterFactory.deploy(greenFalcoin.address);
        await celtMinter.deployed();
    })

    it("airdrop", async()=>{
        await greenFalcoin.mint(celtMinter.address,1e8);
        await greenFalcoin.approve(accounts[5].address, 1e4);
        await celtMinter.connect(accounts[5]).claim(3);
    })
})