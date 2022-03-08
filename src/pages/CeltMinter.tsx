import {styled, width} from "@mui/system"
import { Button, Icon, IconButton, TextField, Typography } from "@mui/material"
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useEffect, useState, useRef } from "react";
import Web3Modal from 'web3modal'
import { ethers } from "ethers";
import CeltMinterABI from '../artifacts/contracts/CeltMinter.sol/CeltMinter.json'
import { celtMinterAddress} from '../config'
import {CeltMinter} from "../../typechain-types"
import MintBgImg from "../assets/mintBgImg.png"
import LoadingButton from '@mui/lab/LoadingButton'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box';
import Favicon from "../assets/favicon.png"
import OpenSeaIcon from "../assets/openseaIcon.svg"
import { delay } from "../utils/Utils";

enum TransactionStatus {
    success,
    fail,
    inProgress,
    finish
}

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
        borderColor:'#fff',
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
        justifyContent:'center',
        justifyItems:'center'
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

    const CheckNFTBtn = styled(Button)(({theme})=>({
        width:'40px',
        height:'40px',
    }))

    const MessageWrapper = styled('div')(({theme})=>({
        display:'flex',
        flexDirection:'row',
        padding:'50px',
        justifyContent:'center',
    }))

    const [formInput, updateFormInput] = useState({count:''})
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(TransactionStatus.finish);

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
        //setLoading(true);
        setStatus(TransactionStatus.inProgress);
        const amount = ethers.utils.parseEther("0.01");
        try {
            const transaction = await contract.claim(count,{
                value: amount.mul(count)
            })
            await transaction.wait();
            setStatus(TransactionStatus.success);
        } catch (error) {
            setStatus(TransactionStatus.fail);
        }
        await delay(5000)
        setStatus(TransactionStatus.finish);
    }

    const openOpenSea = () => {
        var win = window.open('https://testnets.opensea.io/account', '_blank')
        win.focus()
    }

    const bottomElement = () => {
        switch (status) {
            case TransactionStatus.finish:
                return (<MintBtn size="large" endIcon={<ImportExportIcon />} onClick={claim}>
                Buy Celts
                    </MintBtn>)
            case TransactionStatus.fail:
                return (<MessageWrapper><Typography color="red" fontSize="28px">Failed</Typography></MessageWrapper>)
            case TransactionStatus.success:
                return (<MessageWrapper><Typography color="green" fontSize="28px">Success</Typography></MessageWrapper>)
            default:
                return (<Box sx={{ display: 'flex', justifyContent:'center', padding:'50px' }}><CircularProgress color="secondary" /></Box>)
        }
    }

    return(
        <div>
            <MainBgImgWrapper src={MintBgImg}>
            </MainBgImgWrapper>
            <ComponentContainer>
                <InputWrapper id="filled-basic" value={formInput.count} onChange={handleChange} autoFocus label="Amount" color="secondary" sx={{input:{color: 'white', notchedOutline:'white' }}}></InputWrapper>
                {bottomElement()}
            </ComponentContainer>
            <div style={{position:'absolute', top:'20px', right:'50px'}}>
                <CheckNFTBtn size="small" endIcon={<img src={OpenSeaIcon} style={{width:44}} />} onClick={openOpenSea} />
            </div>
            <Footer>
                <img src={Favicon} style={{height:'80px'}}></img>
            </Footer> 
        </div>
    )
}