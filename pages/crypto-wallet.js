import { useMoralis } from "react-moralis";
import { Fragment } from "react";
import Login from "../components/login";

function CryptoWallet() {
  const { isAuthenticated } = useMoralis()

  function handleGas() {
    console.log("gas clicked")
  }
  return (
    <Fragment>
    {!isAuthenticated ? (
      <div className="grid items-center justify-center h-screen">
        <Login />
      </div>
    ) : (
      //All crypto-wallet code goes here.
      <Fragment>
      <div className="mx-auto bg-black bg-opacity-50 backdrop-blur-sm rounded drop-shadow-lg text-center w-auto h-auto flex-col py-24 mb-10">
       
       <h1 className="text-4xl mt-5 mb-10 m-10"><b>Gas Tank</b></h1>
       <h1 className="text-2xl m-3"><b>Placeholder: Display Wallet's Gas </b></h1>
   
       <button
            className="text-3xl inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:bg-gradient-to-l leading-tight uppercase rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out m-10"
            type="button"
            onClick={()=>handleGas}
          >
            Buy Gas
          </button>     
   </div>

   <div className="container mx-auto bg-black bg-opacity-50 backdrop-blur-sm rounded-lg drop-shadow-lg text-center w-1/2 h-auto flex-col p-10">
      <h1 className="text-4xl">FAQs</h1>
      <ul className="text-xl text-left divide-y-2">
        <li className="mb-3">
        <p><b>Question goes here</b></p>
        <p>Answer goes here. Just copy paste li now. Divider will come auto.</p>
        </li>
        <li className="mb-3">
        <p><b>Question goes here</b></p>
        <p>Answer goes here. Just copy paste li now. Divider will come auto.</p>
        </li>
        <li className="mb-3">
        <p><b>Question goes here</b></p>
        <p>Answer goes here. Just copy paste li now. Divider will come auto.</p>
        </li>
        <li className="mb-3">
        <p><b>Question goes here</b></p>
        <p>Answer goes here. Just copy paste li now. Divider will come auto.</p>
        </li>


      </ul>
   </div>
   </Fragment>

    )}
    </Fragment>
    
  )
}

export default CryptoWallet