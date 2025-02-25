
const Hero = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20 min-h-[90vh] flex items-center">
      <div className="flex flex-col items-center lg:items-start justify-center space-y-3 md:space-y-6 w-full lg:max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">Track your driver&apos;s logs</h1>
          <p className="text-gray-500 text-base md:text-lg">TripLoga helps you track your driver&apos; daily activity, and keeps you updated on real-time happenings.</p>
          <a href="/get-started" className="px-6 py-3 text-sm md:text-base md:px-10 md:py-4 border border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full">Learn more</a>
      </div>
    </div>
  )
}

export default Hero
