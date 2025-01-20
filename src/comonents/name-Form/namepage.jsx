import React from "react";

const namepage = () => {
  return (
    <div className="relative">
      <div className="h-screen flex justify-center items-center p-40">
        <div className="w-[48vw] -translate-y-10 h-1/2 relative">
          <img
            className="absolute  w-full "
            src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg"
            alt=""
          />
          <div className="relative" >
            <form >
              <div className="h-[40vh] flex flex-col justify-center items-center w-[48vw]" >
              <h3 className="text-3xl text-white font-medium" >welcome to the galactic port, captain</h3>
               < input className=" pt-4 text-center outline-none bg-transparent text-white placeholder:text-white border-[1px] text-6xl capitalize w-4/6" type="text" placeholder="enter your name"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default namepage;
