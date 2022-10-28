import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

console.log("index.js Loaded")
function index() {
    return (
        <React.StrictMode>
          <App/>
        </React.StrictMode>
    )
}
export default index;

