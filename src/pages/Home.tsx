import Typography from "@mui/material/Typography"
import {styled} from "@mui/system"
import mainBgImg from "../assets/mainBg.svg"
import topLogImg from "../assets/mainLogo.png"
import whiteLogoImg from "../assets/whiteLog.png"
import Celts from "../assets/celts.png"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Favicon from "../assets/favicon.png"

export const Home = () => {
    const CeltContainer = styled('div')(({theme})=>({
       // position:'relative'
        marginBottom:'-50px'
    }))
    const TopBgImgWrapper = styled('img')(({theme})=>({
        width:'100vw',
        //position:'absolute',
    }))
    const TopLogoWrapper = styled('div')(({theme})=>({
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        maxWidth: '600px',
        width:'30%',
        top:'10%',
        left:'10%'
    }))
    
    const MiddleContainer = styled('div')(({theme})=>({
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#3b6b53',
        justifyContent:'center',
        padding:'100px'
    }))

    const BottomLogoWrapper =  styled('div')(({theme})=>({
        display:'flex',
        flexDirection:'column',
        maxWidth:'327px',
        paddingRight:'50px'
    }))
    
    const CeltImgWrapper = styled('div')(({theme})=>({
        display:'flex',
        flexDirection:'column',
        maxWidth:'630px',
        paddingLeft:'50px'
    }))

    const Footer = styled('div')(({theme})=>({
        backgroundColor:'#333',
        width:'100vw',
        padding:'50px',
        display:'flex',
        justifyContent:'center'
    }))

    const MintBtn = styled(Button)(({theme})=>({
        position:'absolute',
        backgroundColor:'#3b6b53',
        width:'200px',
        height:'60px',
        left:'50%',
        top:'45%',
        transform: 'translate(-50%, -50%)',
        color:'white',
        border:'solid 1px',
        borderColor:'white',
        fontSize:'22px',
        zIndex:1
    }))

    const navigate = useNavigate()

    const openMintPage = () => {
        navigate("/minter");
    }
    
    return (
        <div>
            <CeltContainer>
                <TopBgImgWrapper src={mainBgImg} />
                <TopLogoWrapper>
                    <img src={topLogImg}></img>
                    <Typography variant="h5" color="#333">Scattered throughout the metaverse there are powerful and magical CryptoCelts.</Typography>
                </TopLogoWrapper>
                <MintBtn onClick={openMintPage}>Mint</MintBtn>
            </CeltContainer>
            <MiddleContainer>
                <BottomLogoWrapper>
                    <img src={whiteLogoImg} style={{paddingTop:'50px'}}></img>
                    <Typography variant="h5" color="white">CryptoCelts: Druids is a limited collection of randomly generated NFTs. Each druid possesses spectacular magic, and is able to grant its owner a special gift.</Typography>
                </BottomLogoWrapper>
                <CeltImgWrapper>
                    <img src={Celts}></img>
                </CeltImgWrapper>
            </MiddleContainer>
            <Footer>
                <img src={Favicon} style={{height:'80px'}}></img>
            </Footer>
        </div>
        
    )
}