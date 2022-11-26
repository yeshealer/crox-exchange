/* eslint-disable */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect, bsc } from "connectors";
import {
  Button as UiKitButton,
  ConnectorId,
  useWalletModal,
  Flex,
  Text,
  useMatchBreakpoints,
  Link
} from "crox-new-uikit";
import Menu, {
  Button,
  Dropdown,
  Separator,
  DropdownItem,
} from "@kenshooui/react-menu";
import "./mobileMenu.css";
import SideBar from "./sidebar";
import ReactModal from 'react-modal'
import styled from "styled-components";
import "@szhsin/react-menu/dist/index.css";
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import BridgeIcon from './Icon/bridgeIcon'
import useCroxPrice from "hooks/useCroxPrice";
import NetworkSelectModal from './NetworkSelectModal'
import getRpcUrl from "utils/getRpcUrl";
import New from "./New";
import CroxMasHeaderIcon from "./CroxMasHeaderIcon"

const StyledMenu = styled(Menu)`
  background-color: #1a1b23;
  padding: 0px 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 10000;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const StyledMobileMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #1a1b23;
  padding: 0px 10px;
  box-sizing: border-box;
  justify-content: space-between;
  position: fixed;
  top: -1px;
  z-index: 10000;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const SwitchNetButton = styled(Button)`
  margin: 0 24px;
  padding: 0;
  align-items: center;
  display: flex;
  background-color: #2c2d3a;
  color: white;
  border-radius: 20px;
  font-size: 14px;
  img {
    margin-left: 4px;
  }
  z-index: 0;
  @media screen and (max-width: 550px) {
    margin: 0;
  }
`

const NetworkMenu = styled(Menu)`
  width: 30px;
  background-color: #2c2d3a;
  top: 0;
  & .networkDropDown {
    padding: 0 5px;
  }
  & svg {
    display: none;
  }
`

const StyledButton = styled(Button)`
  background-color: transparent;
  color: white;
  box-sizing: border-box;
  border-top: 5px solid transparent;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16px;
  font-weight: 100;
  &:hover {
    background-color: transparent;
    border-top: 5px solid transparent;
  }
`;

const StyledDropDown = styled(Dropdown)`
  background-color: transparent;
  color: white;
  box-sizing: border-box;
  border-top: none;
  box-sizing: border-box;
  padding: 0px 25px;
  font-size: 16px;
  font-weight: 100;
  border-top: 5px solid transparent;
  &:hover {
    background-color: transparent;
    border-top: 5px solid transparent;
  }
  & .itemContainer {
    background-color:  #121827;
    border: none;
    border-radius: 8px;
    margin-top: 3px;
  }
`;

const StyledDropDownGroup = styled.div`
  padding: 8px 0;
  background-color: #121827;
  border-radius: 8px;
  & .swap {
    padding: 16px;
    display: flex;
  }
  & .liquidity {
    padding: 16px;
    display: flex;
  }
`

const StyledDropDownItem = styled(DropdownItem)`
  background-color:  #121827;
  width: 300px;
  border: none;
  padding: 30px 20px;
  &:hover {
    background-color: #253253;
    .changeText {
      color: #2d74c4;
    }
  }
`;

const CroxPriceSection = styled.div`
  display: flex;
  padding: 9px 16px;
  align-items: center;
  background-color: #3b3c4e;
  color: white;
  border-radius: 30px;
`

const StyledDropDownNetwork = styled(Dropdown)`
  background-color: #2c2d3a;
  color: white;
  box-sizing: border-box;
  border-top: none;
  box-sizing: border-box;
  padding: 0px 30px;
  font-size: 14px;
  font-weight: 100;
  &:hover {
    background-color: #2c2d3a;
    border-top: none;
  }
`

const ConnectButton = styled(Button)`
  margin-left: 16px;
  padding: 9px 16px;
  background-color: #3b3c4e;
  color: white;
  font-size: 14px;
  border-radius: 20px;
  z-index: 1;
  letter-spacing: 1px;
  @media screen and (max-width: 550px) {
    letter-spacing: 0;
  }
`
let IsConnectConfirm = false;

const Header = (props) => {
  const history = useHistory();
  const [snowBanner, setSnowBanner] = useState("")
  const { account, activate, deactivate, error, active } = useWeb3React();

  const handleLogin = (connectorId: ConnectorId) => {
    IsConnectConfirm = true;
    if (connectorId === "walletconnect") {
      return activate(walletconnect);
    }
    if (connectorId === "bsc") {
      return activate(bsc);
    }
    return activate(injected);
  };

  const { onPresentNewConnectModal, onPresentNewAccountModal } = useWalletModal(
    handleLogin,
    deactivate,
    account as string
  );
  const croxPrice = useCroxPrice();

  useEffect(() => {
    if (!active && IsConnectConfirm) {
      if (error && error.name === "UnsupportedChainIdError") {
        const { ethereum } = window as any;
        (async () => {
          try {
            await ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            });
          } catch (switchError: any) {
            if (switchError.code === 4902) {
              try {
                await ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: "0x38",
                      chainName: "Binance Smart Chain",
                      nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18,
                      },
                      rpcUrls: [getRpcUrl()],
                      blockExplorerUrls: ["https://bscscan.com/"],
                    },
                  ],
                });
              } catch (addError: any) {
                console.log("++++++++")
                console.error(addError);
              }
            }
          }
          activate(injected);
        })();
      }
    }

    IsConnectConfirm = false;
  }, [error]);


  const cakePriceUsd = useCroxPrice();
  const { isMd, isSm, isXs, isLg } = useMatchBreakpoints();

  const [isNetworkSelectModalOpen, setIsNetworkSelectModalOpen] = useState(false);

  function closeModal() {
    setIsNetworkSelectModalOpen(false);
  }

  ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(69,42,122,0.6)';
  ReactModal.defaultStyles.overlay.zIndex = '98';

  const customStyles = {
    body: {
      overflow: 'hidden'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "transparent",
      border: 'none',
      overflow: 'hidden',
    },
  };

  return (
    <>

      {!isMd && !isSm && !isXs && !isLg ? (

        <StyledMenu className={snowBanner === 'croxmas' ? "menu_snow" : "menu"}>
          <img
            src="/header_logo.png"
            width="120px"
            alt="logo1"
            style={{ margin: "8px 14px", marginRight: "20px" }}
          />
          <StyledButton className="button">
            <a href="https://croxswap.com">Home</a>
          </StyledButton>
          <StyledDropDown label="Trade" className="dropdown itemContainer" itemsClassName="itemContainer">
            <StyledDropDownGroup>
              <StyledDropDownItem className="menu-item swap" onClick={() => history.push("/swap")}>
                <a style={{ marginTop: '3px', marginLeft: '7px' }}>
                  <Flex alignItems='center'>
                    <SwapHorizontalCircleIcon sx={{ fontSize: '20px' }} />
                    <Text color="white" bold ml='3px' fontSize="14px">Swap</Text>
                  </Flex>
                  <Flex flexDirection='column' ml='20px'>
                    <Text color="white" style={{ lineHeight: '24px' }} fontSize='14px' mt="10px">Exchange your tokens using CroxSwap</Text>
                  </Flex>
                </a>
              </StyledDropDownItem>
              <StyledDropDownItem className="menu-item swap" onClick={() => history.push("/pool")}>
                <a style={{ marginTop: '3px', marginLeft: '7px' }}>
                  <Flex alignItems='center'>
                    <SwapHorizontalCircleIcon sx={{ fontSize: '20px' }} />
                    <Text color="white" bold ml='3px' fontSize="14px">Liquidity</Text>
                  </Flex>
                  <Flex flexDirection='column' ml='20px'>
                    <Text color="white" style={{ lineHeight: '24px' }} fontSize='14px' mt='10px'>Provide liquidity to earn a share of</Text>
                    <Text color="white" style={{ lineHeight: '24px' }} fontSize='14px'>trade fees</Text>
                  </Flex>
                </a>
              </StyledDropDownItem>
            </StyledDropDownGroup>
          </StyledDropDown>
          <StyledButton className="button">
            <a href="https://croxswap.com/farms/">Farms</a>
          </StyledButton>
          <StyledButton className="button">
            <a href="https://croxswap.com/pools/nextgen">Pools</a>
          </StyledButton>
          <StyledDropDown label="Bridge" className="dropdown itemContainer" itemsClassName="itemContainer">
            <StyledDropDownGroup>
              <StyledDropDownItem className="menu-item swap" style={{ width: '350px' }}>
                <a style={{ marginTop: '3px', marginLeft: '7px' }} href="https://app.multichain.org/#router">
                  <Flex alignItems='center'>
                    <div style={{ width: '16px', height: '16px' }}>
                      <BridgeIcon />
                    </div>
                    <Text color="white" bold ml='5px' fontSize="14px">Multichain Bridge</Text>
                  </Flex>
                  <Flex flexDirection='column' ml='20px'>
                    <Text color="white" style={{ lineHeight: '24px' }} fontSize='14px' mt="10px">Exchange your tokens using MultiChan Bridge</Text>
                  </Flex>
                </a>
              </StyledDropDownItem>
              <StyledDropDownItem className="menu-item swap" style={{ width: '350px' }}>
                <a style={{ marginTop: '3px', marginLeft: '7px' }} href="https://bridge.croxswap.com">
                  <Flex alignItems='center'>
                    <div style={{ width: '16px', height: '16px' }}>
                      <BridgeIcon />
                    </div>
                    <Text color="white" bold ml='5px' fontSize="14px">CROX Bridge (soon)</Text>
                  </Flex>
                  <Flex flexDirection='column' ml='20px'>
                    <Text color="white" style={{ lineHeight: '24px' }} fontSize='14px' mt="10px">Exchange your tokens using CROXSWAP</Text>
                  </Flex>
                </a>
              </StyledDropDownItem>
            </StyledDropDownGroup>
          </StyledDropDown>
          <StyledButton className="button">
            <a href="https://referral.croxswap.com">Referral</a>
          </StyledButton>
          {/* <StyledButton className="button"><a href="https://app.croxswap.com/ico">XPad</a></StyledButton> */}

          <StyledButton className="button">
            <a href="https://app.croxswap.com/vpots">
              <Flex alignItems='flex-end' mt='-25px'>
                Vpots
                <New />
              </Flex>
            </a>
          </StyledButton>
          <Separator />

          <div style={{ display: "flex", alignItems: "center" }}>

            <Link href='https://coinmarketcap.com/currencies/croxswap' external style={{ textDecoration: 'none' }}>
              <CroxPriceSection>
                <Text fontSize='14px' color="white">$CROX: </Text>
                <Text fontSize='14px' ml="5px" color="white">{cakePriceUsd.toFixed(3)}</Text>
              </CroxPriceSection>
            </Link>
            {!account ? (
              <SwitchNetButton>
                <Flex onClick={() => setIsNetworkSelectModalOpen(true)} alignItems='center'>
                  <img src="/images/network/bsc_icon.png" alt="BSC" style={{ width: '18px', height: '17px' }} />
                  <NetworkMenu className="menu">
                    <StyledDropDownNetwork label="BNB" className="itemContainer networkDropDown" itemsClassName="itemContainer" onClick={() => setIsNetworkSelectModalOpen(true)} />
                  </NetworkMenu>
                </Flex>
                <ConnectButton onClick={onPresentNewConnectModal}>CONNECT</ConnectButton>
              </SwitchNetButton>
            ) : (
              <SwitchNetButton>
                <Flex onClick={() => setIsNetworkSelectModalOpen(true)} alignItems='center'>
                  <img src="/images/network/bsc_icon.png" alt="BSC" style={{ width: '18px', height: '17px' }} />
                  <NetworkMenu className="menu">
                    <StyledDropDownNetwork label="BNB" className="itemContainer networkDropDown" itemsClassName="itemContainer" onClick={() => setIsNetworkSelectModalOpen(true)} />
                  </NetworkMenu>
                </Flex>
                <ConnectButton onClick={onPresentNewAccountModal}>{account.slice(0, 5)}...{account.slice(-5)}</ConnectButton>
              </SwitchNetButton>
            )}
          </div>
        </StyledMenu>
      ) : (
        <StyledMobileMenu>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div id="App">
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>
            <img
              src="/header_logo.png"
              width="120px"
              alt="logo1"
              style={{ margin: "8px 14px", marginRight: "80px" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <span style={{ color: "white", padding: "10px", background: "#253253", marginRight: "20px", borderRadius: '8px' }}>$CROX: $20.62</span> */}
            {!account ? (
              <SwitchNetButton>
                <Flex onClick={() => setIsNetworkSelectModalOpen(true)} alignItems='center'>
                  <img src="/images/network/bsc_icon.png" alt="BSC" style={{ width: '18px', height: '17px' }} />
                  <NetworkMenu className="menu">
                    <StyledDropDownNetwork label="BNB" className="itemContainer networkDropDown" itemsClassName="itemContainer" onClick={() => setIsNetworkSelectModalOpen(true)} />
                  </NetworkMenu>
                </Flex>
                <ConnectButton onClick={onPresentNewConnectModal}>CONNECT</ConnectButton>
              </SwitchNetButton>
            ) : (
              <SwitchNetButton>
                <Flex onClick={() => setIsNetworkSelectModalOpen(true)} alignItems='center'>
                  <img src="/images/network/bsc_icon.png" alt="BSC" style={{ width: '18px', height: '17px' }} />
                  <NetworkMenu className="menu">
                    <StyledDropDownNetwork label="BNB" className="itemContainer networkDropDown" itemsClassName="itemContainer" onClick={() => setIsNetworkSelectModalOpen(true)} />
                  </NetworkMenu>
                </Flex>
                <ConnectButton onClick={onPresentNewAccountModal}>{account.slice(0, 5)}...{account.slice(-5)}</ConnectButton>
              </SwitchNetButton>
            )}
          </div>
        </StyledMobileMenu>
      )}
      <div style={{ height: 62 }}></div>
      <ReactModal isOpen={isNetworkSelectModalOpen} onRequestClose={() => closeModal()} style={customStyles}>
        <NetworkSelectModal onDismiss={() => closeModal()} />
      </ReactModal>
    </>
  );
};

export default Header;
