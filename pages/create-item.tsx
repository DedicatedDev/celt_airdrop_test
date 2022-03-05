// import { ethers } from 'ethers'
// import { useRouter } from 'next/router'
// import {create as ipfsHttpClient} from 'ipfs-http-client'
// import Web3Modal from 'web3modal'
// import axios from 'axios'

// const client = ipfsHttpClient({url:'https://ipfs.infura.io:5001/api/v0'})
// import {celtMinterAddress,nftmarketaddress} from '../config'

// import NFTContract from '../artifacts/contracts/NFT.sol/NFT.json'
// import MarketContract from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
// import { NFT } from '../typechain/NFT'
// import { NFTMarket } from '../typechain/NFTMarket'

// import { useState } from 'react'
// import createStatsCollector from 'mocha/lib/stats-collector'

// export default function CreateItem(){
//     const [fileUrl, setFileUrl] = useState(null);
//     const [formInput, updateFormInput] = useState({price:'', name:'', description:''})
//     const router = useRouter()

//     const onChange = async(e) => {
//         const file = e.target.files[0];
//         try {
//             const added = await client.add(file,{
//                 progress: (prog) => console.log(`recieved: ${prog}`)
//             })
//             const url = `https://ipfs.infura.io/ipfs/${added.path}`
//             setFileUrl(url)
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const createItem = async() => {
//         const {name, description, price} = formInput
//         if (!name || !description || !price || !fileUrl) return
//         const data = JSON.stringify({
//             name, description, image:fileUrl
//         })

//         try {
//             const added = await client.add(data)
//             const url = `https://ipfs.infura.io/ipfs/${added.path}`
//             createSale(url,name,description,)
//         } catch (error) {
//             console.log('Error uploading file',error)
//         }
        
//     }

//     const createSale = async(url:string, name:string,description:string) => {
//         const web3Modal = new Web3Modal()
//         const connection = await web3Modal.connect()
//         const provider = new ethers.providers.Web3Provider(connection)
//         const signer = provider.getSigner()

//         let contract = new ethers.Contract(console.timeEnd('first'), NFTContract.abi, signer)
//         let transaction = await contract.createToken(url)
//         let tx = await transaction.wait()

//         let event = tx.events[0]
//         let value = event.args[2]
//         let tokenId = value.toNumber()

//         const price = ethers.utils.parseUnits(formInput.price, 'ether')
        
//         contract = new ethers.Contract(nftmarketaddress, MarketContract.abi, signer) 
//         const listingPrice = await contract.getListingPrice()
//         const listingPriceS:string = listingPrice.toString()
//         transaction = await contract.createMarketItem(nftaddress,tokenId,price,{
//             value: listingPriceS
//         })
//         await transaction.wait()
//         const newNFT = JSON.stringify({
//             address: nftaddress,
//             name: name,
//             price: Number(price),
//             unit:"ETH",
//             description: description, 
//             token_uri:tokenId
//         })
//         try {
//             await axios.post("http://localhost:8080/nfts/create",newNFT)
//         } catch (error) {
//             console.log(error)
//         }
//         router.push('/')
//     }
    
//     return (
//         <div className="flex justify-center">
//             <div className="flex flex-col w-1/2 pb-12">
//                 <input
//                     placeholder="Asset Name"
//                     className="p-4 mt-8 border rounded"
//                     onChange={e => updateFormInput({...formInput, name: e.target.value})}
//                 />
//                 <textarea
//                     placeholder="Asset Description"
//                     className="p-4 mt-2 border rounded"
//                     onChange={e => updateFormInput({...formInput, description: e.target.value})}
//                 />
//                 <input
//                     placeholder="Asset Price in Matic"
//                     className="p-4 mt-8 border rounded"
//                     onChange={e => updateFormInput({...formInput, price: e.target.value})}
//                 />
                
//                 <input
//                     type="file"
//                     name="Asset"
//                     className="my-4"
//                     onChange={onChange}
//                 />
//                 {
//                     fileUrl && (
//                         <img className="mt-4 rounded" width="350" src={fileUrl}/>
//                     )
//                 }
//                 <button onClick={createItem} className="p-4 mt-4 font-bold text-white bg-pink-500 rounded shadow-lg">
//                     Create Digital Asset
//                 </button>
                
                
//             </div>
//         </div>
//     )
// }
