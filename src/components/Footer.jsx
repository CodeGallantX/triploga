import { useState } from "react"
import { FaDiscord, FaXTwitter, FaPaperPlane } from "react-icons/fa6"

const Footer = () => {

  const formData = useState({
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    alert("Thanks for subscribing!")
  };

  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-start justify-center bg-gray-100 border-t border-t-gray-300/50 py-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-start justify-center space-y-3">
      <a href="/" className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500"><h1>TripLoga</h1></a>
        <p className="text-gray-700">Track your driver&apos; daily activity, stay updated.</p>
        <div className="flex flex-row items-center justify-start space-x-2 text-orange-600 text-3xl">
          <a href="#" rel="noopener noreferrer" className="hover:scale-110 transition-all transition-all duration-300 ease-in-out">
            <FaDiscord className="p-1 border border-orange-400 rounded-full" />
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:scale-110 transition-all transition-all duration-300 ease-in-out">
            <FaXTwitter className="p-1 border border-orange-400 rounded-full" />
          </a>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-medium">Quick Links</h3>
        <ul className="flex flex-col items-start justify-center space-x-10">
          <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">About</a></li>
          <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">View Logs</a></li>
          <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">Help Center</a></li>
        </ul>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-medium"> Newsletter</h3>

        <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center space-y-1">
          {/* <label htmlFor="email">Email address</label> */}
          <input name="email" id="email" type="email" className="w-full max-w-sm text-gray-700 ring-1 ring-gray-500 pl-6 pr-16 py-3.5 rounded-full outline-none focus:ring-1 focus:ring-orange-600 transition-all duration-300 ease-in-out" placeholder="Enter your email address" />
          <button type="submit" className="px-2 py-2 text-xl cursor-pointer bg-orange-600 text-white rounded-full -translate-x-12 -translate-y-1"><FaPaperPlane/></button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
