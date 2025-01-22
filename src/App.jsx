import React, { useState, useEffect } from "react";
import Structure from "./comonents/structure/Structure";
import Homepage from "./comonents/homepage/homepage";
import Nameform from "./comonents/name-Form/namepage";

const App = () => {
  const [username, setusername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setusername(storedUsername); // Set the username if it exists in localStorage
    }
  }, []);

  return (
    <div>
      <Structure />
      {username === "" ? (
        <Nameform username={username} setusername={setusername} />
      ) : (
        <Homepage />
      )}
    </div>
  );
};

export default App;
