import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,
 // Switch,
  Route,
  Link,
  } from "react-router-dom";
import Home from "./Components/home/home.js";
import Withdrawl from "./Components/withdrawl/withdrawl.js";
import Deposit from "./Components/deposit/deposit.js";
import CreateAccount from "./Components/create_account/create_account.js";
import AllData from "./Components/all_data/all_data.js";


  function App() {
    console.log("App Loaded")
    return (
      <>
      <BrowserRouter>
            <div>
                <h1>Routing - Hello World</h1>
                <Link to="/"> Home </Link> --
                <Link to="/Components/withdrawl/"> Withdrawl </Link> --
                <Link to="/Components/deposit/"> Deposit </Link> --
                <Link to="/Components/all_data/"> All Data </Link> --
                <Link to="/Components/create_account/"> Create Account </Link>
                <hr/>
            
                <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/Components/withdrawl/"       element={<Withdrawl/>} />
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


