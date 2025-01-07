import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import { CartProvider } from "./context/Cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <CartProvider> */}
    <App />
    {/* </CartProvider> */}
  </StrictMode>
);
