
import { setGlobalState, useGlobalState } from "../store"
import { useEffect, useState } from 'react'


const Collections = () => {
//   const [collections] = useGlobalState('collections')
//   const [end, setEnd] = useState(4)
//   const [count] = useState(4)
//   const [collectionArr, setCollectionArr] = useState([])

//   const getCollectionArr = () => {
//       if (collections.length > 0) {

//           const endIndex = Math.min(end, collections.length);
//           return collections.slice(0, endIndex);
//       } 
//       else {
//           return [];
//       }
//   }

//   useEffect(() => {
//       if (collections) {
//           setCollectionArr(getCollectionArr());
//       }    
//   }, [collections, end])

  return (
    // <div className="bg-[#151c25] gradient-bg-artworks">
    //     <div className="w-4/5 py-10 mx-auto">

    //         <h4 className="text-white text-3xl font-bold uppercase text-gradient">
    //             {collectionArr.length > 0 ? 'Latest Artwork' : 'No Artworks Yet'}
    //         </h4>

    //         <div className="grid grid-cols-1 md: grid-cols-3 lg: grid-cols-4 gap-6 md:gaps-4 lg: gaps-3 py-2.5">
    //             {collectionArr.map((collection, i) => (
    //                 <Card key={i} collection = {collection} />
    //             ))}
    //         </div>
    //         {collectionArr.length > 0 && collections.length > collectionArr.length ? (
    //             <div className="text-center my-5">
    //                 <button className="shadow-lg shadow-black text-white  
    //                     bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-1"
    //                     onClick={() => setEnd(end + count)}
    //                 >
    //                     Load More
    //                 </button>
    //             </div>
    //         ) : null }
            
    //     </div>
    // </div>

<div className="bg-[#151c25] gradient-bg-artworks">
<div className="w-4/5 py-10 mx-auto">

    <h4 className="text-white text-3xl font-bold uppercase text-gradient">Collections</h4>

    <div className="grid grid-cols-1 md: grid-cols-3 lg: grid-cols-4 gap-6 md:gaps-4 lg: gaps-3 py-2.5">

        <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
                <img className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3" 
                    src='https://red-top-seahorse-583.mypinata.cloud/ipfs/QmSeAaQYDSVJer3rm8pFQJrGUXYchTcW82VnUL78qQ8as1'
                    //alt={collection.name} 
                />
                <h4 className="text-white font-semibold">Programming</h4>
                <p className="text-gray-400 text-sm my-1">Description Description Description Description Description Description Description Description Description Description Description
                </p>

                <div className="flex justify-between items-center mt-3 text-white">
                    <div className="flex flex-col ">
                        {/* <small className="text-xs">Current Price</small>
                        <p className="text-sm font-semibold">{nft.cost}</p> */}
                    </div>

                    <button className="shadow-lg shadow-black text-sm  
                        bg-[#2898a0] hover:bg-[#287fa0] rounded-full px-1.5 py-1"
                        //onClick={setCollection}
                    >
                        View Deteils
                    </button>
                </div>
            </div>


    </div>
        <div className="text-center my-5">
            <button className="shadow-lg shadow-black text-white  
                bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-1"
            >
                Load More
            </button>
        </div>
</div>
</div>
  )
}
//https://red-top-seahorse-583.mypinata.cloud/ipfs/QmRwZjoVDBuktJSa1SSMG3Sf9G1CrihY1KULjSDFsEFLjv
const Card = ({collection}) => {
    //alert(nft.metadataURI)

    const setCollection = () => {
        setGlobalState('collection', collection)
        setGlobalState('showColModal', 'scale-100')
    }
    return(
        <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
            <img className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3" 
                src={collection.metadataURI}
                //src=' https://gateway.pinata.cloud/ipfs/QmQ7oA2X4RDhtBw1ac6s9adj1SLv3eYtb8iBEWE5JvvL1g'
                alt={collection.name} 
            />
            <h4 className="text-white font-semibold">{collection.name}</h4>
            <p className="text-gray-400 text-sm my-1">{collection.description}
            </p>

            <div className="flex justify-between items-center mt-3 text-white">
                <div className="flex flex-col ">
                    {/* <small className="text-xs">Current Price</small>
                    <p className="text-sm font-semibold">{nft.cost}</p> */}
                </div>

                <button className="shadow-lg shadow-black text-sm  
                    bg-[#2898a0] hover:bg-[#287fa0] rounded-full px-1.5 py-1"
                    onClick={setCollection}
                >
                    View Deteils
                </button>
            </div>
        </div>
    )
}

export default Collections
