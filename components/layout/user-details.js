import React, { useEffect, useState } from 'react'
import { useMoralis } from "react-moralis";
import { useChain } from "react-moralis";
//import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";


function UserDetails() {

const { isAuthenticated, user } = useMoralis();
const [username, setUsername] = useState('')
const [userEmail, setUserEmail] = useState('')

const { switchNetwork, chainId } = useChain();
// const setWalletProvider = useCallback(
//   (web3authProvider: SafeEventEmitterProvider) => {
//     const walletProvider = getWalletProvider(chain, web3authProvider, uiConsole);
//     setProvider(walletProvider);
//   },
//   [chain]
// );

useEffect(()=>{
  
  function setUserInfo(name, email) {
  setUserEmail(email);
  setUsername(name);
  }
  async function init() {
    try {
      const { Web3Auth } = await import("@web3auth/web3auth");
      const { OpenloginAdapter } = await import("@web3auth/openlogin-adapter");
      const clientId = "BON5amDs3TtsrzOwRgYuP25eFyR5jsb0XegcAQ9Z2NUX99r07XQe5mrTNo4s2auNxszIbkgmuPg54bXM4ow3U9w";
      const web3AuthInstance = new Web3Auth({
        chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155, chainId: "0x38" },
        clientId,
        authMode: "DAPP",
        enableLogging: true
      });
      
      const adapter = new OpenloginAdapter({ adapterSettings: { network: "mainnet", clientId } });
      web3AuthInstance.configureAdapter(adapter);
      await web3AuthInstance.initModal();
      // const web3auth = new Web3Auth({
      //   chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155, chainId: "0x38" },
      //   authMode: "DAPP",
      //   clientId: clientId,
      //   enableLogging: true
      // });
      console.log("this line before connect")
      const connected = await web3AuthInstance.connect();
      console.log("connect worked" + connected)
      const userInfo = await web3AuthInstance.getUserInfo();
      console.log("userinfo = "+userInfo)
      const name = userInfo.name
      const email = userInfo.email
      setUserInfo(name, email);
      console.log(userEmail)
    } 
    catch (error) {
      console.error("errrrroooooorrrrrrrrrrr"+error);
    } finally {
      console.log("finally block")
    }
  }
  init();
}, [isAuthenticated, user, username]);


  return (
    <div>
    {username}
    {(isAuthenticated)?<h6>{user.get("ethAddress").slice(0,5)+"..."+user.get("ethAddress").slice(-4)}</h6>: <h6>Address:</h6>}
    </div>
  )
}

export default UserDetails