// import { useNavigate } from "react"
// import { FaBars } from "react-icons/fa6"

const Header = () => {
    // const navigate = useNavigate();
    return (
        <header className="fixed w-full flex flex-row items-center justify-between bg-gray-50/40 backdrop-blur-md py-6 px-6 md:px-10 lg:px-20 border-b border-b-gray-200/50">
            <div>
                <h1 
                // onClick={()=> navigate("/")} 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">TripLoga</h1>
            </div>

            <nav className="hidden lg:block">
                <ul className="flex flex-row items-center justify-center space-x-10">
                    <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">Home</a></li>
                    <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">About</a></li>
                    <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">View Logs</a></li>
                    <li className="hover:text-orange-500 transition-all duration-100 ease-out"><a href="#">Help Center</a></li>
                </ul>
            </nav>

            <a href="/get-started" className="text-sm md:text-base px-8 py-4 bg-orange-500 text-white rounded-full">Get started</a>

        </header>
    )
}

export default Header
