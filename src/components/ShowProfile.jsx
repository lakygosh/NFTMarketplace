import {FaTimes} from 'react-icons/fa'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState, truncate } from '../store'
import Identicon from 'react-identicons'
import { buyNFT } from '../Blockchain.services'

const ShowProfile = () => {
    const [connectedAccount] = useGlobalState('connectedAccount')
    const [modal] = useGlobalState('profileModal')
    const [nft] = useGlobalState('nft')

    const closeModal = () => {
        setGlobalState('profileModal', 'scale-0')
    }

  return (
    <div 
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 ${modal}`}
    >
        <div className="bg-[#151c25] shadow-xl shadow-[#40687b] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <div className="flex flex-col">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold">Profile details</p>
                    <button onClick={closeModal} type="button" className="border-0 bg-transparent focus:outline-none">
                        <FaTimes />
                    </button>
                </div>

                <div className="flex justify-between items-center rounded-xl mt-5">
                    <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
                        <img 
                            className="h-full w-full object-cover cursor-pointer" 
                            src="https://red-top-seahorse-583.mypinata.cloud/ipfs/QmZm9xbnEaeJK88tsxh3DRTymRcmD9f6vZCweSburPEfjP" 
                            alt={nft?.title} />
                    </div>
                    <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
                        <img 
                            className="h-full w-full object-cover cursor-pointer" 
                            src="https://red-top-seahorse-583.mypinata.cloud/ipfs/QmRXVaCNKW8eDpCyCx8nJTYTwSHy6LCqXTmA6Da6dbjxP8" 
                            alt={nft?.title} />
                    </div>
                    <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
                        <img 
                            className="h-full w-full object-cover cursor-pointer" 
                            src="https://red-top-seahorse-583.mypinata.cloud/ipfs/Qmeme7HpNY3VUCAQCQKCFAs5qCzD6U2seeb7C39QP91v37" 
                            alt={nft?.title} />
                    </div>
                </div>

                <div className="flex flex-col justify-start rounded-xl mt-5">
                    <h4 className="text-white font-semibold">Department</h4>
                    <p className="text-gray-400 text-sm my-1">Informational systems and techologies</p>
                    <h4 className="text-white font-semibold">Specialties</h4>
                    <p className="text-gray-400 text-sm my-1">Backend development, Software architechture, Team projects</p>

                    <div className="flex justify-center items-center mt-3 text-white">
                        <div className="flex justify-start items-center">
                            <Identicon 
                                className = "h-10  w-10 object-contain rounded-full mr-3" 
                                string={nft?.owner} 
                                size={50}
                            />

                            <div className="flex flex-col justify-center items-start">
                                <small className="text-white font-bold">@Owner</small>
                                <small className="text-blue-800 font-semibold">{nft?.owner ? truncate(nft?.owner, 4,4,11) : ''}</small>
                            </div>
                        </div>

                        {/* <div className="flex flex-col text-white">
                            <small className="text-xs">Owner</small>
                            <p className="text-sm font-semibold">{nft?.owner} ETH</p>
                        </div> */}
                    </div>
                </div>
                {/* {connectedAccount == nft?.owner ? (
                        
                        <button className="flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 w-full
                            bg-[#2898a0] hover:bg-[#287fa0] rounded-full"
                        >
                            Send request
                        </button>
                    ) : (
                        <button className="flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 w-full
                            bg-[#2898a0] hover:bg-[#287fa0] rounded-full"
                        >
                            Send request
                        </button>
                    )
                } */}
            </div>
        </div>
    </div>
  )
}

export default ShowProfile