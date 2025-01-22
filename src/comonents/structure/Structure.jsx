import React from "react";

const Structure = () => {
  return (
    <div className="h-screen  w-screen bg-[#F4F9FB] fixed ">
      <div className="fixed-left ">
        <img
          className="w-1/2 bg-cover top-0 absolute left-0"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f2ff660acfee8ba5cd3b36_border-left-top.svg"
          alt=""
        />
        <img
          className="w-1/2 bg-cover top-0 absolute right-0"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/66603af083943342fe214cf9_border-right-top-new.svg"
          alt=""
        />
      </div>
      <div className="fixed left-0 top-1/2 -translate-y-1/2">
        <img
          className="w-30"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f3025ed598b85f146d736d_border-left-center.svg"
          alt=""
        />
      </div>

      <div className="fixed right-0 top-1/2 -translate-y-1/2">
        <img
          className="w-30"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f302f74ee53940c8b3ece4_border-right-center.svg"
          alt=""
        />
      </div>

      

      <div className="absolute px-10 items-center z-50 flex justify-between w-full bottom-[5%] left-0">
        <img
          className="h-28 "
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a44ad564d4d03ce8f94f_Object1.svg"
          alt=""
        />
        <img  
          className="h-24"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a486295efb3bb8c5d777_Object2.svg"
          alt=""
        />
      </div>

      <div className="w-full h-full bg-[#E6EAEC] rounded-md">
        <img className="bg-cover h-full w-full" src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601b7d63c31da7e5be13f14_Frame%201815%20copy-min%20(1).webp" alt="" />
      </div>
    </div>
  );
};

export default Structure;
