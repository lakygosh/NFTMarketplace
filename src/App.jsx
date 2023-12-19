import Header from "./components/Header"
import Landing from "./components/Landing"
import ArtWorks from "./components/ArtWorks"
import Transactions from "./components/Transactions"
import Footer from "./components/Footer"
import CreateNFT from "./components/CreateNFT"
import Loading from "./components/Loading"
import Alert from "./components/Alert"
import { useEffect } from "react"
import { getAllNFTs, isWalletConnected } from "./Blockchain.services"

const App = () => {

  useEffect(async () => {
    await isWalletConnected()
    await getAllNFTs()
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
        <Loading />
        <Alert />
      </div>

    </div>
  )
}

export default App
