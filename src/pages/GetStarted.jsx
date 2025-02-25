import { useState } from "react"
import { FaPaperPlane } from "react-icons/fa6"
import Header from "../components/Header"
import Footer from "../components/Footer"

const GetStarted = () => {

    const formData = useState({
        currentLocation: "",
        pickupLocation: "",
        dropoffLocation: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
    <div>
        <Header/>
        <div className="flex items-center justify-center bg-gray-50 py-20 pt-40 px-6 md:px-10 lg:px-20 min-h-[80vh]">
            <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center space-y-2 w-full max-w-xl p-6 bg-white shadow-md">
                <fieldset className="flex flex-col items-start justify-center space-y-1 w-full">
                    <label htmlFor="currentLocation" className="font-medium text-lg">Current Location</label>
                    <input type="text" id="currentLocation" className="w-full p-3 rounded-lg outline-none border border-gray-400"/>
                </fieldset>
                <fieldset className="flex flex-col items-start justify-center space-y-1 w-full">
                    <label htmlFor="pickupLocation" className="font-medium text-lg">Pickup Location</label>
                    <input type="text" id="pickupLocation" className="w-full p-3 rounded-lg outline-none border border-gray-400"/>
                </fieldset>
                <fieldset className="flex flex-col items-start justify-center space-y-1 w-full">
                    <label htmlFor="dropoffLocation" className="font-medium text-lg">Dropoff Location</label>
                    <input type="text" id="dropoffLocation" className="w-full p-3 rounded-lg outline-none border border-gray-400"/>
                </fieldset>
                <button onClick={handleSubmit} className="w-full mt-2 p-3 bg-orange-500 hover:bg-black text-white rounded-xl transition-all duration-300 ease-in-out cursor-pointer">Submit <FaPaperPlane className="inline-block"/></button>
            </form>
        </div>
        <Footer/>
      
    </div>
  )
}

export default GetStarted;