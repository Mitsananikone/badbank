import './App.css';
import React from "react";
import {BrowserRouter, Routes,
 // Switch,
  Route,
  // Link,
  } from "react-router-dom";
import Home from "./Components/home/home.js";
import CreateAccount from "./Components/create_account/create_account.js";
import Login from "./Components/login/login.js";
import Balance from "./Components/balance/balance.js";
import AllData from "./Components/all_data/all_data.js";
import Withdraw from "./Components/withdraw/withdraw.js";
import Deposit from "./Components/deposit/deposit.js";
import NavBar from "./Components/navbar/navbar.js";


const UserContext = React.createContext("null");
  function App() {
    console.log("App Loaded")
    return (
      <>
      <BrowserRouter>
            <div>
                       
            <NavBar/>
                <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/Components/create_account/"  element={<CreateAccount/>} />
                  <Route path="/Components/login/" element={<Login/>} />
                  <Route path="/Components/balance/" element={<Balance/>} />
                  <Route path="/Components/all_data/" element={<AllData/>} />
                  <Route path="/Components/withdraw/" element={<Withdraw/>} />
                  <Route path="/Components/deposit/" element={<Deposit/>} />
                 
                </Routes>
            </div>
          
      </BrowserRouter>
    </>
    );
  };

export default App;
export {UserContext};


