import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";


function Navbar() {
  let menuArray = [true, false, false];
  const [menu, setMenu] = useState(menuArray);
  const [show, setShow] = useState(true);
  const { logout } = useMoralis()

  const setMenuValue = (props) => {
    let newArr = [...menu];
    newArr[props] = !newArr[props];
    setMenu(newArr);
  };

  return (
    <div>
      <div className="rounded-r xl:hidden flex justify-between w-full p-6 items-center">
        <div className="flex justify-between  items-center space-x-3">
          <h1>This is where User Stats will go</h1>
        </div>
        <div aria-label="toggler" className="flex justify-center items-center">
          <button
            aria-label="open"
            id="open"
            onClick={() => setShow(true)}
            className={`${
              show ? "hidden" : ""
            } focus:outline-none focus:ring-2`}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="close"
            id="close"
            onClick={() => setShow(false)}
            className={`${
              show ? "" : "hidden"
            } focus:outline-none focus:ring-2`}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="Main"
        className={`${
          show ? "translate-x-0" : "-translate-x-full"
        } xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 bg-opacity-80 flex-col`}
      >
      
        <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
        <Link href="/"><Image
            src="/favicon-32x32.png"
            alt="logo"
            layout="intrinsic"
            width={32}
            height={32}
          /></Link>
          <Link href="/"><h1 className="text-xl">Cryft NFT</h1></Link>
        </div>

        <Link href="/redeem-card"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">Redeem Card</p>
        </li></Link>
        <Link href="/crypto-wallet"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">Crypto Wallet</p>
        </li></Link>
        <Link href="/nft-collection"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">NFT Collection</p>
        </li></Link>
        <Link href="/swap-crypto"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">Swap Crypto</p>
        </li></Link>

        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full mb-10"></div>

        <Link href="/cryft-shop"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">Cryft Shop</p>
        </li></Link>
        <Link href="/cryft-zone"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">Cryft Zone</p>
        </li></Link>
        <Link href="/education"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <p className="text-base leading-4 ">Education</p>
        </li></Link>
        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full mb-10"></div>
        <Link href="/"><li className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <button onClick={logout} className="text-base leading-4 ">Exit Dashboard</button>
        </li></Link>
        <span className="self-center m-5 flex">
           <div className="p-3 hover:scale-125 transition ease-in-out delay-150">
           <a href="https://twitter.com/CryftC" target="_blank" rel="noreferrer"><Image src="/assets/twitter.svg" alt="twitter" layout="intrinsic" width={32} height={32} /></a>
           </div>
           <div className="p-3 hover:scale-125 transition ease-in-out delay-150">
           <a href="https://discord.gg/" target="_blank" rel="noreferrer"><Image src="/assets/discord.svg" alt="discord" layout="intrinsic" width={35} height={35} /></a>
           </div>
        </span>

        <span className="self-center m-5 flex">
        <p>Version 1.0</p>
        </span>
        <footer className='fixed bottom-0 left-1/3 text-center text-white'>© {new Date().getFullYear()} Cryft</footer>
        
      </div>
      
    </div>
  );
}

export default Navbar;
