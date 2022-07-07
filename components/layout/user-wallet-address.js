import { Fragment } from 'react';
import { useMoralis } from "react-moralis";

function UserWalletAddress() {
    const { isAuthenticated, user } = useMoralis();
    return (
    <Fragment>
        {(isAuthenticated)?<h6>{user.get("ethAddress").slice(0,5)+"..."+user.get("ethAddress").slice(-4)}</h6>: <h6>Address:</h6>}
    </Fragment>
  )
}

export default UserWalletAddress