import { ethers } from 'ethers'
import {useEffect,useState} from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Web3Modal from 'web3modal'
import CeltMinterABI from '../artifacts/contracts/CeltMinter.sol/CeltMinter.json'
import { celtMinterAddress, nftmarketaddress,rinkebyApiKey,rinkebyId } from '../config'
import { CeltMinter } from '../typechain/CeltMinter'

const Home: NextPage = () => {
  const [formInput, updateFormInput] = useState({count:''})

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
    const transaction = await contract.claim(count)
    await transaction.wait();
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
      </div>
    </div>
  )
}

export default Home
