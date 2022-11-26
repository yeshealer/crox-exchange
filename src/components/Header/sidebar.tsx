import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
} from "@kenshooui/react-menu";
import {
  Text,
  Flex,
  Link
} from "crox-new-uikit";
import useTheme from "hooks/useTheme";
import HomeIcon from '@mui/icons-material/Home';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PoolIcon from '@mui/icons-material/Pool';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { GiBrokenPottery } from 'react-icons/gi'
import { useHistory } from "react-router-dom";
import useCroxPrice from "hooks/useCroxPrice";
import { slide as Menu } from "react-burger-menu";
import BridgeIcon from './Icon/bridgeIcon'
import BridgeIconWhite from './Icon/bridgeIcon_white'
import CroxMasHeaderIcon from "./CroxMasHeaderIcon"
import New from "./New";
import './switchButton.css'

const StyledButton = styled(Button)`
  align-items: center;
  display: flex !important;
`

const StyledButtonItem = styled(Button)`
text-align: left;
  align-items: center;
  display: flex !important;
  color: #d1d1d1;
  padding: 10px 12px;
  width: 185px;
  margin-left: 25px;
`

const StyledButtonGroup = styled.div`
  padding: 3px 0;
  border-top: 1px solid #8080801c;
  border-bottom: 1px solid #8080801c;
`

export default props => {

  const cakePriceUsd = useCroxPrice();
  const history = useHistory();
  const { isDark, toggleTheme } = useTheme();
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [snowBanner, setSnowBanner] = useState("")
  const [element, setElement] = useState(window.localStorage.getItem('target_id'))
  const unselect = 'menu_item'
  const select = isDark ? 'menu_item menu_active' : 'menu_item menu_active_white'
  const onElement = (data) => {
    setIsOpenMenu(false)
    window.localStorage.setItem('target_id', data.target.id)
    setElement(window.localStorage.getItem('target_id'))
    switch (window.localStorage.getItem('target_id')) {
      case 'ico':
        history.push("/ico")
        break;
      case 'home':
        history.push("/")
        break;
      case 'farms':
        history.push("/farms")
        break;
      case 'pools':
        history.push("/pools/nextgen")
        break;
      case 'croxmas':
        history.push("/croxmas")
        break;
      default:
    }
  }
  const onTrade = () => {
    if ((document as any).getElementById('trade_group').style.display === 'none') {
      (document as any).getElementById('trade_group').style.display = 'block'
    } else {
      (document as any).getElementById('trade_group').style.display = 'none'
    }
  }
  const onBridge = () => {
    if ((document as any).getElementById('bridge_iswap').style.display === 'none') {
      (document as any).getElementById('bridge_iswap').style.display = 'block';
      (document as any).getElementById('trade_group').style.display = 'none';
    } else {
      (document as any).getElementById('bridge_iswap').style.display = 'none'
    }
  }
  const SwitchClick = (data) => {
    toggleTheme()
  }
  const handleStateChange = (state) => {
    setIsOpenMenu(state.isOpen)
  }
  useEffect(() => {
    if (!isDark) {
      (document as any).getElementById("crox_price").parentElement.parentElement.style.backgroundColor = '#defaff';
      (document as any).getElementById("crox_price").firstElementChild.classList.add('white_mode_price')
    }
    else {
      (document as any).getElementById("crox_price").parentElement.parentElement.style.backgroundColor = "black";
      (document as any).getElementById("crox_price").firstElementChild.classList.remove('white_mode_price')
    }
  })

  return (
    <>
      <Menu id="menu_body" {...props} isOpen={isOpenMenu} onStateChange={(state) => handleStateChange(state)}>
        <Button className="closeButton" onClick={() => setIsOpenMenu(false)}>&#10006;</Button>
        <Link href='https://coinmarketcap.com/currencies/croxswap' external style={{ textDecoration: 'none' }}>
          <div className="menu_croxprice" id="crox_price">
            <Text className="croxprice" color="white">$CROX: ${cakePriceUsd.toFixed(3)}</Text>
          </div>
        </Link>
        <Flex flexDirection='column' style={{ position: 'relative', height: '450px', overflow: 'scroll', overflowX: 'hidden' }}>
          <Link href="https://croxswap.com" style={{ textDecoration: 'none' }}>
            <StyledButton className={element === 'home' ? select : unselect} id="home">
              {isDark ? <HomeIcon sx={{ fontSize: '18px', color: 'white' }} id="home" /> : <HomeIcon sx={{ fontSize: '18px', color: '#2d74c4c7' }} id="home" />}
              <Text fontSize="18px" ml="7px" id="home">Home</Text>
            </StyledButton>
          </Link>

          <StyledButton className={element === 'trade' ? select : unselect} id="trade" onClick={() => onTrade()}>
            {isDark ? <AccountBalanceIcon sx={{ fontSize: '18px', color: 'white' }} id="trade" /> : <AccountBalanceIcon sx={{ fontSize: '18px', color: '#2d74c4c7' }} id="trade" />}
            <Text fontSize="18px" ml="7px" id="trade" mr="110px">Trade</Text>
            {isDark ? <ArrowDropDownIcon id="trade" sx={{ color: 'white' }} /> : <ArrowDropDownIcon sx={{ color: '#2d74c4c7' }} id="trade" />}
          </StyledButton>
          <StyledButtonGroup id="trade_group" style={{ display: 'none' }}>
            <StyledButtonItem>
              <a style={isDark ? { fontSize: '16px', width: '180px' } : { fontSize: '16px', width: '180px', color: '#2d74c4c7' }} href="https://exchange.croxswap.com/#/swap">Swap</a>
            </StyledButtonItem>
            {/* <StyledButtonItem>
              <a style={isDark ? { fontSize: '16px', width: '180px' } : { fontSize: '16px', width: '180px', color: '#2d74c4c7' }} href="https://exchange.babyswap.finance/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491">Swap (BABYSWAP)</a>
            </StyledButtonItem> */}
            <StyledButtonItem>
              <a style={isDark ? { fontSize: '16px', width: '180px' } : { fontSize: '16px', width: '180px', color: '#2d74c4c7' }} href="https://exchange.croxswap.com/#/pool">Liquidity</a>
            </StyledButtonItem>
            {/* <StyledButtonItem>
              <a style={isDark ? { fontSize: '16px', width: '180px' } : { fontSize: '16px', width: '180px', color: '#2d74c4c7' }} href="https://exchange.babyswap.finance/#/add/0x2c094f5a7d1146bb93850f629501eb749f6ed491/0x55d398326f99059fF775485246999027B3197955">Liquidity (BABY LP)</a>
            </StyledButtonItem> */}
          </StyledButtonGroup>

          <Link href="https://croxswap.com/farms" style={{ textDecoration: 'none' }}>
            <StyledButton className={element === 'farms' ? select : unselect} id="farms">
              {isDark ? <AgricultureIcon sx={{ fontSize: '18px', color: 'white' }} id="farms" /> : <AgricultureIcon sx={{ fontSize: '18px', color: '#2d74c4c7' }} id="farms" />}
              <Text fontSize="18px" ml="7px" id="farms">Farms</Text>
            </StyledButton>
          </Link>
          <Link href="https://croxswap.com/pools/nextgen" style={{ textDecoration: 'none' }}>
            <StyledButton className={element === 'pools' ? select : unselect} id="pools">
              {isDark ? <PoolIcon sx={{ fontSize: '18px', color: 'white' }} id="pools" /> : <PoolIcon sx={{ fontSize: '18px', color: '#2d74c4c7' }} id="pools" />}
              <Text fontSize="18px" ml="7px" id="pools">Pools</Text>
            </StyledButton>
          </Link>

          <StyledButton className={element === 'bridge' ? select : unselect} id="bridge" onClick={(e) => onBridge()}>
            <div style={{ width: '18px', height: '18px', marginTop: '-7px' }}>{!isDark ? <BridgeIconWhite /> : <BridgeIcon />}</div>
            <Text fontSize="18px" ml="7px" id="trade" mr='96px'>Bridge</Text>
            {isDark ? <ArrowDropDownIcon id="trade" sx={{ color: 'white' }} /> : <ArrowDropDownIcon sx={{ color: '#2d74c4c7' }} id="trade" />}
          </StyledButton>
          <StyledButtonGroup id="bridge_iswap" style={{ display: 'none' }}>
            <StyledButtonItem>
              <a style={isDark ? { fontSize: '16px', width: '180px' } : { fontSize: '16px', width: '180px', color: '#2d74c4c7' }} href="https://app.multichain.org/#router">Multichain Bridge</a>
            </StyledButtonItem>
            <StyledButtonItem>
              <a style={isDark ? { fontSize: '16px', width: '180px' } : { fontSize: '16px', width: '180px', color: '#2d74c4c7' }} href="https://bridge.croxswap.com">CROX Bridge (soon)</a>
            </StyledButtonItem>
          </StyledButtonGroup>

          <StyledButton className={element === 'referral' ? select : unselect} id="referral" onClick={(e) => onElement(e)}>
            {isDark ? <ThumbUpOffAltIcon sx={{ fontSize: '18px', color: 'white' }} id="pools" onClick={(e) => onElement(e)} /> : <ThumbUpOffAltIcon sx={{ fontSize: '18px', color: '#2d74c4c7' }} id="pools" onClick={(e) => onElement(e)} />}
            {isDark ? <a style={{ fontSize: '18px', width: '160px', marginLeft: '7px', color: '#EAE2FC' }} href="https://referral.croxswap.com">Referral</a> : <a style={{ fontSize: '18px', width: '160px', marginLeft: '7px', color: '#2B2A29' }} href="https://bridge.croxswap.com">Referral</a>}
          </StyledButton>

          {/* <StyledButton className={element === 'ico' ? select : unselect} id="ico" onClick={(e) => onElement(e)}>
            <div style={{ width: '18px', height: '18px', marginTop: '-7px' }} id="ico">{isDark ? <RocketLaunchIcon sx={{ fontSize: '18px', color: 'white' }} id="pools" onClick={(e) => onElement(e)} /> : <RocketLaunchIcon sx={{ fontSize: '18px', color: '#2d74c4c7' }} id="pools" onClick={(e) => onElement(e)} />}</div>
            {isDark ? <Text style={{ fontSize: '18px', width: '160px', marginLeft: '7px', color: '#EAE2FC' }} id="ico" >Xpad</Text> : <Text style={{ fontSize: '18px', width: '160px', marginLeft: '7px', color: '#2B2A29' }} id="ico">Xpad</Text>}
          </StyledButton> */}

          <StyledButton className={element === 'vpots' ? select : unselect} id="vpots" onClick={(e) => onElement(e)}>
            <div style={{ width: '18px', height: '18px', marginTop: '-7px' }} id="vpots">{isDark ? <GiBrokenPottery style={{ fontSize: '18px', color: 'white' }} id="pools" onClick={(e) => onElement(e)} /> : <GiBrokenPottery style={{ fontSize: '18px', color: '#2d74c4c7' }} id="pools" onClick={(e) => onElement(e)} />}</div>
            {isDark ? <Text style={{ fontSize: '18px', width: '160px', marginLeft: '7px', color: '#EAE2FC' }} id="vpots" >VPots</Text> : <Text style={{ fontSize: '18px', width: '160px', marginLeft: '7px', color: '#2B2A29' }} id="vpots">VPots</Text>}
            <New />
          </StyledButton>

          {/* <StyledButton className={element === 'referral' ? select : unselect} id="croxmas" onClick={(e) => onElement(e)}>
            <CroxMasHeaderIcon />
            <Text className="HotPink-Glitter" color="white" style={{ marginLeft: '25px', fontFamily: 'Mountains of Christmas' }} id="croxmas" onClick={(e) => onElement(e)}>CROXMAS</Text>
          </StyledButton> */}
        </Flex>

        <div style={{ position: 'absolute', bottom: '55px', left: '20px' }}>
          <Button className="wrapper_switch" onClick={(e) => SwitchClick(e)}>
            <div className={isDark ? 'tdnn' : 'tdnn day'}>
              <div className={isDark ? 'moon' : 'moon sun'} />
            </div>
          </Button>
        </div>
        <div
          style={isDark ? {
            display: "flex",
            alignItems: "center",
            position: 'absolute',
            bottom: 15
          } : {
            padding: '5px 10px 2px',
            display: "flex",
            alignItems: "center",
            position: 'absolute',
            bottom: 15,
            backgroundColor: "#2d74c4c7",
            borderRadius: '10px',
            left: '16px'
          }}
        >
          <a href="https://t.me/croxswap">
            <img
              src="/icon_telegram.svg"
              alt="telegram"
              style={{ marginRight: "12px" }}
            />
          </a>
          <a href="https://twitter.com/croxswap">
            <img
              src="/icon_twitter.svg"
              alt="twitter"
              style={{ marginRight: "12px" }}
            />
          </a>
          <a href="https://github.com/croxswap">
            <img
              src="/icon_github.svg"
              alt="github"
              style={{ marginRight: "12px" }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCPEJ2aiaH03VwKe4YoFWSGw">
            <img
              src="/icon_youtube.svg"
              alt="youtube"
              style={{ marginRight: "12px" }}
            />
          </a>
          <a href="https://croxswap.medium.com">
            <img
              src="/icon_medium.svg"
              alt="blog"
              style={{ marginRight: "12px" }}
            />
          </a>
          <a href="https://reddit.com/r/croxswap">
            <img
              src="/icon_reddit.svg"
              alt="reddit"
              style={isDark ? { marginRight: "12px" } : {}}
            />
          </a>
        </div>
      </Menu>
      <Button style={{ paddingLeft: 0, paddingRight: 0 }} onClick={() => { setIsOpenMenu(true) }}><MenuIcon sx={{ color: 'white' }} /></Button>
    </>
  );
};
