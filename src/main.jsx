import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux"; // is used to provide store to all components by wrapping components by it and passing store value
import  store  from "./store/index";

//globlal store is created here provided to all the components  from here 

//Provider to provide store to all components by wrapping components by it and passing store value

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
