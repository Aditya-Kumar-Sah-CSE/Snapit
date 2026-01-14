import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {Provider} from "react-redux"

import { Toaster } from 'sonner'
import { CartProvider } from "./context/CartContext";
import store from './redux/store'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       <Provider store={store}>
          <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
    <Toaster/>
       </Provider>
  
  </React.StrictMode>
);

