import React, { useState } from "react";

const NamePage = (props) => {
  const [userInput, setUserInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (userInput.trim() !== "") {
      localStorage.setItem("username", userInput); // Store input in localStorage
      console.log("Name saved to localStorage:", userInput);
      props.setusername(userInput); // Pass the name to the parent component (if required)
    } else {
      alert("Please enter a valid name.");
    }
  };

  return (
    <div className="relative">
      <div className="h-screen flex justify-center items-center p-40">
        <div className="w-[48vw] -translate-y-16 h-1/2 relative">
          <img
            className="absolute w-full"
            src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg"
            alt="Background decoration"
          />
          <div className="relative">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="h-[40vh] flex flex-col justify-center items-center w-[48vw]">
                <h3 className="text-3xl text-white font-medium">
                  Welcome to the Galactic Port, Captain
                </h3>
                <input
                  className="pt-4 text-center outline-none bg-transparent text-white placeholder:text-white border-[1px] text-6xl capitalize w-4/6"
                  type="text"
                  placeholder="Enter your name"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)} // Update state on input change
                />
              </div>
              <button
                type="submit"
                className="px-3  absolute right-0 uppercase py-3 rounded-md hover:text-white hover:bg-black  font-semibold bg-white text-black "
              >
                Start the Journey
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePage;
