import Head from 'next/head'
import Image from 'next/image';
import { MoralisProvider, useMoralis } from "react-moralis";
import Login from '../components/login';
import { Fragment, useEffect, useState } from 'react';


export default function Home() {
    const { isAuthenticated } = useMoralis()
    async function handleLogout() {
      await logout();
      console.log("logged out");
    };


  
    return (
      <Fragment>
      <Head>
        <title>Cryft NFTs</title>
        <meta
          name="description"
          content="Cryft NFT Dapp"
        />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Cryft NFT Dapp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:title" content="Cryft NFTs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://cryft-nft.netlify.app" />
        <meta
          property="og:image"
          content="/android-chrome-512x512.png"
        />
        <meta property="og:description" content="Cryft NFT Dapp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>



        {!isAuthenticated ? (
          <div className="grid place-items-center h-screen">
            <Login />
          </div>
        ) : (
          <div className="text-2xl">
            <h1 className="text-white"> Authentication complete! </h1>
      
          </div>
        )}
        </Fragment>
    )
  }
