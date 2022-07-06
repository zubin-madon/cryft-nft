import React, { Fragment } from "react";
import { useMoralis } from "react-moralis";
import Image from "next/image";

function Login() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const userLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        provider: "web3Auth",
        clientId:
          "BON5amDs3TtsrzOwRgYuP25eFyR5jsb0XegcAQ9Z2NUX99r07XQe5mrTNo4s2auNxszIbkgmuPg54bXM4ow3U9w",
        signingMessage: "Log in using Moralis",
      })
      .catch(function (error) {
        console.log("errrrrrrrrrrrrrrroooooooooorrrrrrrrrrrr" + error);
      })
    }
      
  };

  

  return (
    <Fragment>
      <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded drop-shadow-lg text-center w-auto h-auto">
        <Image src="/android-chrome-512x512.png" layout="intrinsic" width={192} height={192} alt="Cryft Logo" />
          <h1 className="text-4xl mt-5 mb-10 m-10">Cryft Cards</h1>  
          <h2 className="text-2xl m-10">Welcome to the Moon</h2>
       
          <button
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:bg-gradient-to-l leading-tight uppercase rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out m-10"
            type="button"
            onClick={userLogin}
          >
            Enter Dashboard
          </button>
      </div>
    </Fragment>
  );
}

export default Login;
