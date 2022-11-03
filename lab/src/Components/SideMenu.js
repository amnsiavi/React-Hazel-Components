import React from 'react';
import '../assets/style.css';
import Stack from 'react-bootstrap/Stack';
import {BsPerson} from "react-icons/bs";
import {FaHome} from 'react-icons/fa';
import {GiBlackHoleBolas} from 'react-icons/gi';
import {IoAppsSharp} from 'react-icons/io5';
import {TiDeviceDesktop} from 'react-icons/ti';
import {TiArrowSyncOutline} from 'react-icons/ti';
import {FiGrid} from 'react-icons/fi';
import '../assets/style.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import {AiOutlineHome} from 'react-icons/ai';
import {RiContactsLine} from 'react-icons/ri';
import {BsInfoSquare} from 'react-icons/bs';
import {MdProductionQuantityLimits} from 'react-icons/md'





const SideMenu = () => {


  const [bgColor, setBgColor] = useState('white');
  const [hamDisplay, setHamDisplay] = useState('');
  const [closeDisplay,setCloseDisplay] = useState('none');
  const [closeBgColor, setCloseBgColor] = useState('white');
  const [homeHover, setHomeHover] = useState('');
  const [aboutHover, setAboutHover] = useState('');
  const [contactHover, setContactHover] = useState('');
  const [productsHover, setProductsHover] = useState('');
  const [dropMenuDis, setDropMenuDis] = useState('none');
  const [containerBg, setContainerBg] = useState('white');
  const [sideIcon1Hover, setSideIcon1Hover] = useState('');
  const [sideIcon1Width, setSideIcon1Width] = useState('');
  const [sideIcon1Color, setSideIcon1Color] = useState('');

  const [sideIcon2Hover, setSideIcon2Hover] = useState('');
  const [sideIcon2Width, setSideIcon2Width] = useState('');
  const [sideIcon2Color, setSideIcon2Color] = useState('');

  const [sideIcon3Hover, setSideIcon3Hover] = useState('');
  const [sideIcon3Width, setSideIcon3Width] = useState('');
  const [sideIcon3Color, setSideIcon3Color] = useState('');

  const [sideIcon4Hover, setSideIcon4Hover] = useState('');
  const [sideIcon4Width, setSideIcon4Width] = useState('');
  const [sideIcon4Color, setSideIcon4Color] = useState('');

  const [sideIcon5Hover, setSideIcon5Hover] = useState('');
  const [sideIcon5Width, setSideIcon5Width] = useState('');
  const [sideIcon5Color, setSideIcon5Color] = useState('');

  const [sideIcon6Hover, setSideIcon6Hover] = useState('');
  const [sideIcon6Width, setSideIcon6Width] = useState('');
  const [sideIcon6Color, setSideIcon6Color] = useState('');

  const [sideIcon7Hover, setSideIcon7Hover] = useState('');
  const [sideIcon7Width, setSideIcon7Width] = useState('');
  const [sideIcon7Color, setSideIcon7Color] = useState('');
  
  

  

  const hamStyle = {

    backgroundColor:bgColor,
    display:hamDisplay

  }
  

  const closeStyle={

    display:closeDisplay,
    backgroundColor:closeBgColor
  }
  const styles = {
    color:'white',
    width:'50px',
    height:'27px',
    marginTop:'20px',
    
    

}
const iconStyle={
  color:'white',
  marginLeft:'1rem',
  marginBottom:'-0.01rem',
  
}
  return (
    //Main Stack vertical
    <Stack gap={3}>
    <div style={{marginLeft:'-1rem'}} className='side-m'>

    <Stack style={{backgroundColor:'black', width:'5%',height:'100vh',display:'flex',alignItems:'center',position:'fixed',marginLeft:'1rem'}} gap={3}>
        <br />
        <br />
        <BsPerson style={{backgroundColor:`${sideIcon1Hover}`,width:`${sideIcon1Width}`, color:`${sideIcon1Color}`}} className='icons' onMouseEnter={()=>{
          setSideIcon1Hover('yellow');
          setSideIcon1Width('2.2rem');
          setSideIcon1Color('black')
        }} onMouseLeave={()=>{
          setSideIcon1Hover('');
          setSideIcon1Width('');
          setSideIcon1Color('');
        }}/>
        <GiBlackHoleBolas style={{backgroundColor:`${sideIcon2Hover}`,width:`${sideIcon2Width}`, color:`${sideIcon2Color}`}} className='icons' onMouseEnter={()=>{
           setSideIcon2Hover('yellow');
           setSideIcon2Width('2.2rem');
           setSideIcon2Color('black')
        }} onMouseLeave={()=>{
          setSideIcon2Hover('');
          setSideIcon2Width('');
          setSideIcon2Color('');
        }}/>
        <IoAppsSharp style={{backgroundColor:`${sideIcon3Hover}`,width:`${sideIcon3Width}`, color:`${sideIcon3Color}`}} className='icons' onMouseEnter={()=>{
           setSideIcon3Hover('yellow');
           setSideIcon3Width('2.2rem');
           setSideIcon3Color('black')
        }}onMouseLeave={()=>{
          setSideIcon3Hover('');
          setSideIcon3Width('');
          setSideIcon3Color('');
        }}/>
        <TiDeviceDesktop style={{backgroundColor:`${sideIcon4Hover}`,width:`${sideIcon4Width}`, color:`${sideIcon4Color}`}} className='icons' onMouseEnter={()=>{
           setSideIcon4Hover('yellow');
           setSideIcon4Width('2.2rem');
           setSideIcon4Color('black')
        }}onMouseLeave={()=>{
          setSideIcon4Hover('');
          setSideIcon4Width('');
          setSideIcon4Color('');
        }}/>
        <TiArrowSyncOutline style={{backgroundColor:`${sideIcon5Hover}`,width:`${sideIcon5Width}`, color:`${sideIcon5Color}`}} className='icons' onMouseEnter={()=>{
           setSideIcon5Hover('yellow');
           setSideIcon5Width('2.2rem');
           setSideIcon5Color('black')
        }}onMouseLeave={()=>{
          setSideIcon5Hover('');
          setSideIcon5Width('');
          setSideIcon5Color('');
        }}/>
        <FiGrid style={{backgroundColor:`${sideIcon6Hover}`,width:`${sideIcon6Width}`, color:`${sideIcon6Color}`}} className='icons' onMouseEnter={()=>{
           setSideIcon6Hover('yellow');
           setSideIcon6Width('2.2rem');
           setSideIcon6Color('black')
        }}onMouseLeave={()=>{
          setSideIcon6Hover('');
          setSideIcon6Width('');
          setSideIcon6Color('');
        }}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
       
        <FaHome style={{backgroundColor:`${sideIcon7Hover}`,width:`${sideIcon7Width}`, color:`${sideIcon7Color}`}} className='icons' onMouseEnter={()=>{
           setSideIcon7Hover('yellow');
           setSideIcon7Width('2.2rem');
           setSideIcon7Color('black')
        }}onMouseLeave={()=>{
          setSideIcon7Hover('');
          setSideIcon7Width('');
          setSideIcon7Color('');
        }}/>
    </Stack>

    </div>

    <GiHamburgerMenu className='hamburger' style={hamStyle} onMouseEnter={()=>{
      
      setBgColor('yellow')
    }}
    onMouseLeave={()=>{
      setBgColor('white')
    }}onClick={()=>{

      setHamDisplay('none')
      setCloseDisplay('')
      setContainerBg('black')
      setDropMenuDis('')
    }}/>
    <AiOutlineClose className='close' style={closeStyle} onMouseEnter={()=>{

      setCloseBgColor('#f57e42');
    }} onMouseLeave={()=>{
      setCloseBgColor('white')
    }} onClick={()=>{
      setHamDisplay('')
      setCloseDisplay('none')
      setDropMenuDis('none');
      setContainerBg('white')
    }}/>

    {/* Container dropdown menu */}
    <Container style={{marginTop:'0.5rem',backgroundColor:`${containerBg}`,width:'12rem',marginRight:'17rem',borderRadius:'10px',height:'14rem',display:'none'}}className='d-flex flex-column align-items-center justify-content-center h-container' id='c-container'>

      <Stack id='stack-1' gap={3} direction='horizontal' style={{border:'1px groove white',display:`${dropMenuDis}`,width:'11.8rem',marginLeft:'-0.6rem',marginTop:'-1rem',backgroundColor:`${homeHover}`}} onMouseEnter={()=>{
        setHomeHover('#ebdc34')
      }} onMouseLeave={()=>{
        setHomeHover('')
      }}><AiOutlineHome style={iconStyle}/> <p style={{color:'white',marginLeft:'2rem',marginBottom:'-0.01rem'}}>Home</p></Stack>
      <br />
      <Stack id='stack-2' gap={3} direction='horizontal'style={{border:'1px groove  white',display:`${dropMenuDis}`,width:'11.8rem',marginLeft:'-0.6rem',backgroundColor:`${contactHover}`}} onMouseEnter={()=>{setContactHover('#ebdc34')}} onMouseLeave={()=>{setContactHover('')}}><RiContactsLine style={iconStyle}/><p style={{color:'white',marginLeft:'2rem',marginBottom:'-0.01rem'}}>Contact</p></Stack>
      <br />
      <Stack id='stack-3' gap={3} onMouseEnter={()=>{setAboutHover('#ebdc34')}} onMouseLeave={()=>{setAboutHover('')}} direction='horizontal'style={{border:'1px groove  white',display:`${dropMenuDis}`,width:'11.8rem',marginLeft:'-0.6rem',backgroundColor:`${aboutHover}`}}><BsInfoSquare style={iconStyle}/><p style={{color:'white',marginLeft:'2rem',marginBottom:'-0.01rem'}}>About</p></Stack>
      <br />
      <Stack id='stack-4' onMouseEnter={()=>{setProductsHover('#ebdc34')}} onMouseLeave={()=>{setProductsHover('')}} gap={3} direction='horizontal'style={{border:'1px groove  white',display:`${dropMenuDis}`,width:'11.8rem',marginLeft:'-0.6rem',backgroundColor:`${productsHover}`}}><MdProductionQuantityLimits style={iconStyle}/><p style={{color:'white',marginLeft:'2rem',marginBottom:'-0.01rem'}}>Products</p></Stack>

    </Container>



    </Stack>
    
    
    

    



    
    
  )
  
}

export default SideMenu