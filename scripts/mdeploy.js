
const { ethers, upgrades } = require("hardhat");
async function main() {
  

    const Dex = await ethers.getContractFactory("Dex")
    let Dex_ = await Dex.deploy();

    console.log("Dex  🚀 ",Dex_.address)

    const FlashLoanArbitrage = await ethers.getContractFactory("FlashLoanArbitrage")
    let FlashLoanArbitrage_ = await FlashLoanArbitrage.deploy("0xC911B590248d127aD18546B186cC6B324e99F02c",Dex_.address);

    console.log("FlashLoanArbitrage_  🚀 ",FlashLoanArbitrage_.address) //

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
  
    


    // verify  : npx hardhat verify 0x1AXXXXXXXXX  OR npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
// deploy  : npx hardhat run scripts/mdeploy.js    
// upgrade : npx hardhat run scripts/upgrade.js      