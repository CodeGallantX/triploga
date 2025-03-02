const Hero = () => {
  return (
    <div className="bg-gray-50 py-20 pt-40 px-6 md:px-10 lg:px-20 min-h-[90vh] flex items-center justify-between">
      <div className="flex flex-col items-center lg:items-start justify-center space-y-3 md:space-y-6 w-full lg:max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
          Smart Trip Logging & ELD Compliance
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Track and optimize your trips with real-time route instructions, automated ELD log generation, and compliance tracking.
        </p>
        <a href="/get-started" className="px-6 py-3 text-sm md:text-base md:px-10 md:py-4 border border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full">
          Start Logging Your Trip
        </a>
      </div>
      <div className="hidden lg:block">
        <img src="/logistics-rafiki.svg" alt="Trip logging illustration" className="max-w-md" />
      </div>
    </div>
  )
}

export default Hero;
