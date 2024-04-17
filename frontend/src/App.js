import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Signup />
      {/* <Login /> */}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
