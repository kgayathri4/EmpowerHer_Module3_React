import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostProvider } from "./context/PostContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </ThemeProvider>
);