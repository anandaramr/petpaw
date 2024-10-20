import React, { useEffect } from "react"; 
// Import useEffect from React

export default function SignUp({ CiUser, RiLockPasswordFill, MdEmail }) {
  /*useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".paw").forEach(function (paw) {
        const speed = paw.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        paw.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);*/
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ca9e78] font-poppins relative overflow-hidden">
      <div className=" absolute bg-custom-image w-24 h-24 bg-no-repeat right-14 top-10 bg-cover opacity-70 transition-transform duration-300 hover:scale-150"  data-speed="2"></div>
      <div className=" absolute bg-custom-image w-24 h-24 bg-no-repeat left-10 top-24 bg-cover opacity-70 transition-transform duration-300 hover:scale-150"  data-speed="4"></div>
      <div className=" absolute bg-custom-image bottom-14 right-24 w-24 h-24 bg-no-repeat  bg-cover opacity-70 transition-transform duration-300 hover:scale-150"  data-speed="3"></div>
      <div className=" absolute bg-custom-image w-24 h-24 bg-no-repeat left-1/3 top-32 bg-cover opacity-70 transition-transform duration-300 hover:scale-150"  data-speed="1"></div>
      <div className=" absolute bg-custom-image w-24 h-24 bg-no-repeat left-2/3 bottom-48 bg-cover opacity-70 transition-transform duration-300 hover:scale-150"  data-speed="5"></div>
      <div className=" absolute bg-custom-image w-24 h-24 bg-no-repeat left-40 bottom-20 bg-cover opacity-70 transition-transform duration-300 hover:scale-150"  data-speed="5"></div>

      <div className="bg-[#fffbfb] p-8 shadow-lg rounded-lg w-[450px] flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form>
          <div className="relative mb-4">
            <CiUser className="absolute left-3 top-3 text-2xl" />
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
          <div className="relative mb-4">
            <MdEmail className="absolute left-3 top-3 text-2xl" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
          <div className="relative mb-4">
            <RiLockPasswordFill className="absolute left-3 top-3 text-2xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
          <div className="relative mb-4">
            <RiLockPasswordFill className="absolute left-3 top-3 text-2xl" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
          <button
            className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-yellow-800 "
            type="submit">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 flex flex-row">Already have an account? Please <p className="text-blue-500 underline"> sign in</p></p>
      </div>
    </div>
  );
}
