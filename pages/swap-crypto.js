import { useMoralis } from "react-moralis";
import { Fragment } from "react";
import Login from "../components/login";

function SwapCrypto()  {
  const { isAuthenticated } = useMoralis()
  return (
    <Fragment>
    {!isAuthenticated ? (
      <div className="grid place-items-center h-screen">
        <Login />
      </div>
    ) : (
      //All page code goes here. 
    <div className="mx-auto bg-black bg-opacity-50 backdrop-blur-sm rounded drop-shadow-lg text-center w-auto h-96 flex-col py-24" id="swapcrypto">
       <h1 className="text-4xl mt-5 mb-10 m-10"><b>Swap My Crypto</b></h1>  
       <h2 className="text-2xl m-10">Coming Soon</h2>
   </div> 
    
    )}
    </Fragment>
  )
}

export default SwapCrypto