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
        {!isAuthenticated ? (
          <div className="grid place-items-center h-screen">
            <Login />
          </div>
        ) : (
          <div className="text-2xl">
            <h1 className="text-white"> Home Authentication complete </h1>
      
          </div>
        )}
        </Fragment>
    )
  }
