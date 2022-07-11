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

useEffect(()=>{
  
  function setUserInfo(name, email) {
  setUserEmail(email);
  setUsername(name);
  }
  async function init() {
    try {
      const { Web3Auth } = await import("@web3auth/web3auth");
      const { OpenloginAdapter } = await import("@web3auth/openlogin-adapter");
      const clientId = "BHf2Rd_AzwufYCifFC81PaeXwJ0NW9BvLVCkTikc8msr_JFb5qkaeFzSlc1G2x2rMEDnfTNSOT4cmi9N3a0qgW8"
      const web3AuthInstance = new Web3Auth({
        chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155, chainId: "0x38" },
        clientId,
        authMode: "DAPP",
        enableLogging: true
      });
      
      const adapter = new OpenloginAdapter({ adapterSettings: { network: "mainnet", clientId } });
      web3AuthInstance.configureAdapter(adapter);
      await web3AuthInstance.initModal();
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
    </div>
  )
}

export default UserDetails