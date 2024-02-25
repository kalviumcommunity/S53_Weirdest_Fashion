import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./Components/Theme.jsx";
import ParentContext from "./Context/ParentContext.jsx";
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider Theme={Theme}>
    <ParentContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParentContext>
  </ChakraProvider>
);
