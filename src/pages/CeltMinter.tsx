import {styled, width} from "@mui/system"
import { Button, Icon, IconButton, TextField } from "@mui/material"
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useEffect, useState, useRef } from "react";
import Web3Modal from 'web3modal'
import { ethers } from "ethers";
import CeltMinterABI from '../artifacts/contracts/CeltMinter.sol/CeltMinter.json'
import { celtMinterAddress} from '../config'
import {CeltMinter} from "../../typechain-types"
import MintBgImg from "../assets/mintBgImg.png"
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Favicon from "../assets/favicon.png"

export const Minter = () => {
    const MainContainer = styled('div')(({theme})=>({
        //width:'100vw',
        //position:'relative'
    }))

    const MainBgImgWrapper = styled('img')(({theme})=>({
        width:'100vw',
        zIndex:-1
        //marginBottom:'-10px'
    }))

    const Footer = styled('div')(({theme})=>({
        backgroundColor:'#333',
        width:'100vw',
        padding:'50px',
        display:'flex',
        justifyContent:'center'
    }))
    
    const InputWrapper = styled(TextField)(({theme})=>({
        color:'white',
        borderColor:'#000',
        multilineColor:{
            color:'white'
        }
        
    }))

    const ComponentContainer = styled('div')(({theme})=>({
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        left:'50%',
        top:'45%',
        transform: 'translate(-50%, -50%)',
    }))

    const MintBtn = styled(Button)(({theme})=>({
        backgroundColor:'#3b6b53',
        width:'200px',
        height:'60px',
        color:'white',
        border:'solid 1px',
        borderColor:'white',
        fontSize:'22px',
        marginTop:'50px',
        zIndex:1
    }))

    const [formInput, updateFormInput] = useState({count:''})
    const [loading, setLoading] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFormInput((prev)=>({...prev,count:event.target.value}))
    };
    
    const claim = async() => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(celtMinterAddress, CeltMinterABI.abi, signer) as CeltMinter
        const count = +formInput.count;
        if(count == 0) {
            return;
        }
        setLoading(true);
        const amount = ethers.utils.parseEther("0.01");
        const transaction = await contract.claim(count,{
            value: amount.mul(count)
        })
        await transaction.wait();
        setLoading(false);
    }

    return(
        <div>
            <MainBgImgWrapper src={MintBgImg}>
            </MainBgImgWrapper>
            <ComponentContainer>
                <InputWrapper id="filled-basic" value={formInput.count} onChange={handleChange} autoFocus label="Amount" color="secondary" sx={{input:{color: 'white'}}}></InputWrapper>
                {
                    !loading ? <MintBtn size="large" endIcon={<ImportExportIcon />} onClick={claim}>
                        Buy Celts
                    </MintBtn> : <Box sx={{ display: 'flex', justifyContent:'center', padding:'50px' }}><CircularProgress color="secondary" /></Box>
                }
                
            </ComponentContainer>
            <Footer>
                <img src={Favicon} style={{height:'80px'}}></img>
            </Footer> 
        </div>
    )
}