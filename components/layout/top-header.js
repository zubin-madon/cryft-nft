import React, { Fragment } from "react";
import UserDetails from "./user-details";
import UserWalletAddress from "./user-wallet-address";

function TopHeader() {
  return (
    <Fragment>
      <div className="justify-between flex m-3 bg-black rounded-xl backdrop-blur-sm bg-opacity-40 sm:bg-transparent px-3">
        <div>
          <h1 className="text-xl">Gas Tank</h1>
          <h2>0.00 BNB</h2>
        </div>
        <div>
        <UserDetails />
        <UserWalletAddress />
        </div>
      </div>
      <div className="w-full flex-wrap justify-start items-center border-y-4 border-b border-purple-600 mb-10"></div>
    </Fragment>
  );
}

export default TopHeader;
