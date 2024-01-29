import Header from "./components/Header"
import Landing from "./components/Landing"
import ArtWorks from "./components/ArtWorks"
import Transactions from "./components/Transactions"
import Footer from "./components/Footer"
import CreateNFT from "./components/CreateNFT"
import Loading from "./components/Loading"
import Alert from "./components/Alert"
import ShowNFT from "./components/ShowNFT"
import UpdateNFT from "./components/UpdateNFT"
import Web3 from "web3";
import { useEffect } from "react"
import { enableMetaMask, getAllNFTs, isWalletConnected } from "./Blockchain.services"


const App = () => {

  useEffect(async () => {
    const initializeMetaMask = async () => {
      if (window.ethereum) {
        try {
          // Prompt the user to connect their MetaMask wallet
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log('MetaMask is enabled!');
          // Now you can call your Ethereum-related functions
          await isWalletConnected()
          await getAllNFTs()
          
        } catch (error) {
          console.error('User denied account access or MetaMask not available', error);
        }
      } else {
        console.error('MetaMask not detected');
      }
    };
  
    window.addEventListener('load', initializeMetaMask);
  
    return () => {
      window.removeEventListener('load', initializeMetaMask);
    };
   
  }, [])

  return (
    <div className="min-h-screen">

      <div className="gradient-bg-hero">
      <Header />
      <Landing />
      </div>

      <div>
        <ArtWorks />
        <Transactions />
        <Footer />
        <CreateNFT />
        <ShowNFT />
        <UpdateNFT />
        <Loading />
        <Alert />
      </div>

    </div>
  )
}

export default App
