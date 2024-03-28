import FD_logo from '../assets/plavi_logo.png'


const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between md:justify-center items-center gradient-bg-footer p-4">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.25] justify-center items-center">
                <img className="w-32" src='https://red-top-seahorse-583.mypinata.cloud/ipfs/QmPiHmbdJ7twcqrJFAzh3o8jc7cMyBCqTyQyGcrZgD2kfy' alt="Logo" />
            </div>

            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center">
                <p className="cursor-pointer mx-2">Students</p>
                <p className="cursor-pointer mx-2">Companies</p>
                <p className="cursor-pointer mx-2">Features</p>
                <p className="cursor-pointer mx-2">Charts</p>
            </div>

            <div className="flex flex-[0.25] justify-center items-center">
                <p className="text-white text-right text-sm">&copy;2023 All rights revserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer