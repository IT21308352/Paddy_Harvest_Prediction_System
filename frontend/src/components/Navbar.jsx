const Navbar = () => {
  return (
    <div className="bg-darkgreen" id="navbar">
      <nav className="bg-darkgreen shadow-lg p-5">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between  sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="text-2xl font-bold text-primary">
                  <img src="./logo.png" alt="" className="w-16"/>
                </a>
              </div>
              <div className="hidden sm:block sm:ml-6 ms-20">
                <div className="flex space-x-10 ms-20">
                <a
                    href="/"
                    className="text-white text-[18px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Home
                  </a>
                  
                  <a
                    href="/input-form"
                    className="text-white text-[18px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Harvest Prediction
                  </a>
                  <a
                    href="/srilanka-map"
                    className="text-white text-[18px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Sri Lankan Recent Yield 
                  </a>
                  
                </div>
              </div>
            </div>
            {/* Profile Image Section */}
            <div className="flex items-center space-x-4 ps-40">
              <a href="/profile">
                <img
                  src="https://r2.erweima.ai/imgcompressed/compressed_99726877699680553dd6912404bcbb83.webp" // Replace with the correct path to your profile image
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md "
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
