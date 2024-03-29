import { useEffect, useState } from "react"
import { setGlobalState, useGlobalState } from "../store"


const ArtWorks = () => {
    const [nfts] = useGlobalState('nfts')
    const [end, setEnd] = useState(4)
    const [count] = useState(4)
    const [collection, setCollection] = useState([])

    const getCollection = () => {
        if (nfts.length > 0) {

            const endIndex = Math.min(end, nfts.length);
            return nfts.slice(0, endIndex-7);
        } 
        else {
            return [];
        }
    }

    useEffect(() => {
        if (nfts) {
            setCollection(getCollection());
        }    
    }, [nfts, end])

  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
        <div className="w-4/5 py-10 mx-auto">

            <h4 className="text-white text-3xl font-bold uppercase text-gradient">
                {collection.length > 0 ? 'Latest NFTs' : 'No NFTs Yet'}
            </h4>

            <div className="grid grid-cols-1 md: grid-cols-3 lg: grid-cols-4 gap-6 md:gaps-4 lg: gaps-3 py-2.5">
                {collection.map((nft, i) => (
                    <Card key={i} nft = {nft} />
                ))}
            </div>
            {collection.length > 0 && nfts.length > collection.length ? (
                <div className="text-center my-5">
                    <button className="shadow-lg shadow-black text-white  
                        bg-[#5927b6] hover:bg-[#7925bd] rounded-full px-1.5 py-1"
                        onClick={() => setEnd(end + count)}
                    >
                        Load More
                    </button>
                </div>
            ) : null }
            
        </div>
    </div>
  )
}
//https://red-top-seahorse-583.mypinata.cloud/ipfs/QmRwZjoVDBuktJSa1SSMG3Sf9G1CrihY1KULjSDFsEFLjv
const Card = ({nft}) => {
    //alert(nft.metadataURI)

    const setNFT = () => {
        setGlobalState('nft', nft)
        setGlobalState('showModal', 'scale-100')
    }
    return(
        <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
            <img className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3" 
                src={nft.metadataURI}
                //src=' https://gateway.pinata.cloud/ipfs/QmQ7oA2X4RDhtBw1ac6s9adj1SLv3eYtb8iBEWE5JvvL1g'
                alt={nft.title} 
            />
            <h4 className="text-white font-semibold">{nft.title}</h4>
            <p className="text-gray-400 text-sm my-1">{nft.description}
            </p>

            <div className="flex justify-between items-center mt-3 text-white">
                <div className="flex flex-col ">
                    <small className="text-xs">Year</small>
                    <p className="text-sm font-semibold">2024</p>
                </div>

                <button className="shadow-lg shadow-black text-sm  
                    bg-[#7330aa] hover:bg-[#8828a0] rounded-full px-1.5 py-1"
                    onClick={setNFT}
                >
                    View Details
                </button>
            </div>
        </div>
    )
}
export default ArtWorks