import FD_logo from '../assets/plavi_logo.png'
import { connectWallet } from '../Blockchain.services.jsx'
import { truncate, useGlobalState } from '../store/index.jsx'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
        <div className="md: flex-[0.5] flex-initial justify-center items-center">
            <img className="w-32 cursor-pointer" src={FD_logo} alt="Logo" />
        </div>
        <ul className="md: flex-[0.5] text-white md:flex hidden list-none justify-between items-center flex-initial">
          <li className="mx-4 cursor-pointer">Market</li>
          <li className="mx-4 cursor-pointer">Artists</li>
          <li className="mx-4 cursor-pointer">Features</li>
          <li className="mx-4 cursor-pointer">Community</li>
        </ul>

       {connectedAccount ? (
          <button className="shadow-xl shadow-black text-white 
            bg-[#2898a0] hover:bg-[#287fa0] md:text-xs p-2 rounded-full"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
       ) : (
          <button className="shadow-xl shadow-black text-white 
            bg-[#2898a0] hover:bg-[#287fa0] md:text-xs p-2 rounded-full"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
       )}
    </div>
  )
}

export default Header