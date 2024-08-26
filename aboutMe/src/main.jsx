import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Cards from "./components/Cards/cards.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */} <Cards />
  </React.StrictMode>
);
