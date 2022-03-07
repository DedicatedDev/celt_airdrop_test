import { ethers } from 'ethers'
import {useState} from 'react'
import type { NextPage } from 'next'
import Web3Modal from 'web3modal'
import CeltMinterABI from '../artifacts/contracts/CeltMinter.sol/CeltMinter.json'
import { celtMinterAddress} from '../config'
import { CeltMinter } from '../typechain/CeltMinter'
import ClipLoader from "react-spinners/ClipLoader";

const Home: NextPage = () => {
  const [formInput, updateFormInput] = useState({count:''})
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const claim = async() => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    
    const signer = provider.getSigner()
    const contract = new ethers.Contract(celtMinterAddress, CeltMinterABI.abi, signer) as CeltMinter
    const count = +formInput.count;
    if(count == 0) {
      return;
    }
    setLoading(true);
    const transaction = await contract.claim(count,{
      value: count * 1e15
    })
    await transaction.wait();
    setLoading(false);
  }

  const changeFee = async() => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    
    const signer = provider.getSigner()
    const contract = new ethers.Contract(celtMinterAddress, CeltMinterABI.abi, signer) as CeltMinter
    const count = +formInput.count;
    if(count == 0) {
      return;
    }
    setLoading(true);
    const transaction = await contract.setGreenFalAirdropAmount(1e16);
    await transaction.wait();
    setLoading(false);
  }
  
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1/2 pb-12">
      <input placeholder="Mint Amount" className="p-4 mt-8 border rounded"
          onChange={e => updateFormInput({...formInput, count: e.target.value})}         
      />
        <button  className="p-4 mt-4 font-bold text-white bg-pink-500 rounded shadow-lg"
        onClick={claim}
        >
            Create Digital Asset            
        </button>

        <button  className="p-4 mt-4 font-bold text-white bg-pink-500 rounded shadow-lg"
        onClick={claim}
        >
            Change Fee          
        </button>
      </div>
    </div>
  )
}

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;


export default Home
