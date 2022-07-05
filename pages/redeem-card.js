import { Fragment } from "react";
import {useMoralis} from "react-moralis";
import Login from "../components/login";

function RedeemCard() {
  const { isAuthenticated } = useMoralis()

  function handleRedeem() {
    console.log("redeem clicked")
  }

  return (
    <Fragment>
    {!isAuthenticated ? (
      <div className="grid items-center justify-center h-screen">
        <Login />
      </div>
    ) : (
      //All page code goes here.
      <div className="mx-auto bg-black bg-opacity-50 backdrop-blur-sm rounded drop-shadow-lg text-center w-auto h-auto flex-col py-24">
       
       <h1 className="text-4xl mt-5 mb-10 m-10"><b>Redeem Cryft Cards</b></h1>  
       <form>
       <input className="border-purple-600 placeholder-slate-400 placeholder:text-center contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-full text-black pr-5 pl-5 p-2 m-2 text-center border-4" placeholder="Enter Serial Number"/>
       </form>
       <button
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:bg-gradient-to-l leading-tight uppercase rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out m-10"
            type="button"
            onClick={handleRedeem}
          >
            Redeem
          </button>
       <h1 className="text-2xl m-3"><b>Redeemed Cards: </b></h1>
       <h1 className="text-2xl m-3"><b>No Cards Redeemed</b></h1>
       
   </div>
    )}  
    </Fragment>
  )
}

export default RedeemCard