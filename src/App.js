import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,
 // Switch,
  Route,
  Link,
  } from "react-router-dom";
import Home from "./Components/home/home.js";
import Withdraw from "./Components/withdraw/withdraw.js";
import Deposit from "./Components/deposit/deposit.js";
import CreateAccount from "./Components/create_account/create_account.js";
import AllData from "./Components/all_data/all_data.js";


const UserContext = React.createContext("null");
  function App() {
    console.log("App Loaded")
    return (
      <>
      <BrowserRouter>
            <div>
                <h1>Routing - Hello World</h1>
                <Link to="/"> Home </Link> --
                <Link to="/Components/withdraw/"> Withdraw </Link> --
                <Link to="/Components/deposit/"> Deposit </Link> --
                <Link to="/Components/all_data/"> All Data </Link> --
                <Link to="/Components/create_account/"> Create Account </Link>
                <hr/>
            
                <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/Components/withdraw/"       element={<Withdraw/>} />
                  <Route path="/Components/deposit/" element={<Deposit/>} />
                  <Route path="/Components/all_data/" element={<AllData/>} />
                  <Route path="/Components/create_account/"  element={<CreateAccount/>} />
                </Routes>
            </div>
          
      </BrowserRouter>
    </>
    );
  };

export default App;
export {UserContext};


