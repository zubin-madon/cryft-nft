import { Fragment } from "react";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Layout from "../components/layout/layout";




function MyApp({ Component, pageProps }) {
  return (
     <div className="bg-[url('/assets/LandingPage.jpg')] md:h-screen text-white bg-no-repeat bg-top md:bg-center bg-fixed md:bg-cover flex flex-col md:flex-row">
    
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_ENV_LOCAL_MORALIS_SERVER_URL}
        appId={process.env.NEXT_PUBLIC_ENV_LOCAL_MORALIS_APPLICATION_ID}
      >
    <Layout>
        <Component {...pageProps} />
    </Layout>
      </MoralisProvider>
      
    </div>
  );
}

export default MyApp;
