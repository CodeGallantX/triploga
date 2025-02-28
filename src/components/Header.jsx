const Header = () => {
    return (
        <header className="fixed w-full flex flex-row items-center justify-between bg-gray-50/40 backdrop-blur-md py-6 px-6 md:px-10 lg:px-20 border-b border-b-gray-200/50">
            <div>
                <a 
                href="/"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500"><h1>TripLoga</h1></a>
            </div>

            <a href="/get-started" className="text-sm md:text-base px-8 py-4 bg-orange-500 text-white rounded-full">Get started</a>

        </header>
    )
}

export default Header
