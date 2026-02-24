import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import "./assets/css/app.min.css";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { initAuth } from "./redux/authSlice";
import { setupAxiosInterceptors } from "./utils/setupAxiosInterceptors";
import "./i18n";
store.dispatch(initAuth());
setupAxiosInterceptors(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = import.meta.env.DEV
  ? React.StrictMode
  : React.Fragment;

root.render(
  <AppWrapper>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppWrapper>
);


//Why API is called twice
//React Strict Mode – Double useEffect execution (DEV only)
//Remove StrictMode in development

//React.StrictMode USE CASE
//Runs certain lifecycle methods twice (ONLY IN DEV)
//Warns about deprecated APIs
//Detects accidental side effects
//Helps you prepare for future React features
