import Navbar from './navbar';
import { Fragment } from 'react';
import { MoralisProvider, useMoralis } from "react-moralis";
import TopHeader from './top-header';

function Layout(props) {
  const { isAuthenticated } = useMoralis()
  return (
    <Fragment>
    {isAuthenticated&&<Navbar />}
    <div className='mx-auto w-full'>
    {isAuthenticated&&<TopHeader />}
    <main>{props.children}</main>
    </div>
    </Fragment>
  )
}

export default Layout