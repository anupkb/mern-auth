import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h4>Hi there!</h4>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
