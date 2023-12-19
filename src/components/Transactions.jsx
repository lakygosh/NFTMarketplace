import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'
import { useGlobalState, truncate } from '../store'
import { useEffect, useState } from 'react'


export const Transactions = () => {

  const [transactions] = useGlobalState('transactions')
  const [end, setEnd] = useState(3)
  const [count] = useState(3)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return transactions.slice(0, end)
}

useEffect(() => {
    setCollection(getCollection())
}, [transactions, end])

  return (
    <div className="bg-[#151c25]">

      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          {collection.length > 0 ? 'Latest Transactions' : 'No Transactions Yet'}
        </h4>

        <div className="grid grid-cols-1 md: grid-cols-3 lg: grid-cols-4 gap-6 md:gaps-4 lg: gaps-2 py-2.5">
                {collection.map((nft, i) => (
                    <Transaction key={i} tx={i + 1}/>
                  ))}
        </div>

        {collection.length > 0 && transactions.length > collection.length ? (
          <div className="text-center my-5">
            <button className="shadow-lg shadow-black text-white  
                bg-[#2898a0] hover:bg-[#287fa0] rounded-full px-1.5 py-1"
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
const Transaction = ({tx}) => (
  <div className="flex justify-between items-center border 
    border-blue-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <div className="rounded-md shadow-sm shadow-blue-500 p-2">
      <BiTransfer/>
    </div>

    <div>
      <h4 className="text-sm">NFT Transfered</h4>
      <small className="flex justify-start items-center">
        <span className="mr-1">Received by</span>
        <a className="text-blue-500 mr-2" href="#" target='_blank'>{truncate(tx.owner, 4,4,11)}</a>
        <MdOpenInNew />
      </small>
    </div>

    <p className="text-sm font-medium">{tx.cost} ETH</p>
  </div>
)

export default Transactions
