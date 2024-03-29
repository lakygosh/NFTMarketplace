import Identicon from 'react-identicons'
import { setGlobalState, truncate, useGlobalState } from '../store'
const Web3 = require('web3');

const imgLanding = "https://red-top-seahorse-583.mypinata.cloud/ipfs/QmNmDjzMzWFPH6MAD3rRXcxy7CRHWtZqiHvNtKyNG3Y9vS"
//const web3 = new Web3(new Web3.provider.HttpProvider('https://sepolia.infura.io/v3/e5dae1df891e488788b9681994b7f6fa'));
const Hero = () => {

  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
        <div className="md:w-3/6 w-full">
            <div>
                <h1 className="text-white text-5xl font-bold">
                  Study and Achieve 
                  <br /> 
                  Digital Arts, 
                  <br />
                  <span className="text-gradient">NTFs</span> 
                  Collection
                </h1>
                <p className="text-gray-500  font-semibold text-sm mt-3">Build your Achievables portfolio and gain competition advantage</p>
            </div>

            <div className="flex mt-6">
              <button onClick={() => setGlobalState('modal', 'scale-100')} className="shadow-xl shadow-black text-white
               bg-[#7330aa] hover:bg-[#8828a0] rounded-full p-2">
                Create NFT
              </button>

              {/* <button onClick={() => setGlobalState('CreateCollectionModal', 'scale-100')} className="ml-7 shadow-xl shadow-black text-white
               bg-[#2898a0] hover:bg-[#287fa0] rounded-full p-2">
                Kreiraj kolekciju
              </button> */}
            </div>

            <div className="w-3/4 flex justify-between items-center mt-5">

              <div className="text-white">
                <p className="font-bold">1k</p>
                <small className="text-gray-500">Students</small>
              </div>

              <div className="text-white">
                <p className="font-bold">52k</p>
                <small className="text-gray-500">Achievables</small>
              </div>

              <div className="text-white">
                <p className="font-bold">500</p>
                <small className="text-gray-500">Recruiters</small>
              </div>

            </div>


        </div>

      <div className="shadow-xl shadow-black md:w-2/5 w-full mt-10 
        md:mt-0 rounded-md overflow-hidden bg-gray-800">

        <img className="h-60 w-full object-cover" src={imgLanding} alt="Hero" />

        <div className='flex justify-start items-center p-3'>
          <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={connectedAccount} size={50} />
        </div>

        <div className="p-3">
          <p className="text-white fonr-semibold">{truncate(connectedAccount, 4,4,11)}</p>
          <small className="text-blue-800 font-bold">@you</small>
        </div>

        <button onClick={() => setGlobalState('profileModal', 'scale-100')} className="ml-3 mb-3 shadow-xl shadow-black text-white
          bg-[#7330aa] hover:bg-[#8828a0] rounded-full p-2">
          Profile details
        </button>

      </div>    
    </div>
  )
}

export default Hero