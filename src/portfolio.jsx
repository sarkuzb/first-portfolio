import React, { useState, useEffect } from "react";

function Portfolio() {
  // Declare current time state inside the component
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Formatting current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const formattedDate = `${year} Year`;

  // Formatting current time
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="bg-slate-800 w-screen h-screen m-auto">
      <div className="w-6/12 h-screen flex flex-col justify-evenly m-auto bg-slate-600 shadow-2xl shadow-slate-900">
        {/* Resume Button */}
        <div className="flex justify-center">
          <div className="flex items-center justify-evenly bg-slate-700 shadow-md shadow-slate-800 h-14 w-[730px] mt-4 rounded-lg">
            <button className="text-md font-semibold text-slate-400 hover:text-white transition transform">
              Your Resume
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col h-full justify-evenly items-center p-5">
          <div className="flex items-center justify-center w-52 h-52 bg-slate-200 rounded-full">
            <p className="font-light text-slate-400">Your Profile Picture...</p>
          </div>

          <div className="bg-slate-500 w-full h-72">
            <p className="p-2 font-light text-slate-400">About You...</p>
          </div>
          <div className="w-full">
            <p className="font-light text-slate-400">Your Contacts Here...</p>
          </div>
        </div>
      </div>

      {/* Display formatted date */}
      <p className="fixed bottom-7 right-5 font-semibold text-slate-300">
        {formattedDate}
      </p>

      {/* Display formatted time */}
      <p className="fixed bottom-12 right-6 font-semibold text-slate-300">
        {formattedTime}
      </p>
    </div>
  );
}

export default Portfolio;
