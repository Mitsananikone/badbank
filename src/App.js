import './App.css';
import Spa from './index.js';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";
import Home from "./Components/home/home.js";
import Withdrawl from "./Components/withdrawl/withdrawl.js";
import Deposit from "./Components/deposit/deposit.js";
import Create_Account from "./Components/create_account/create_account.js";
import All_Data from "./Components/all_data/all_data.js";

console.log("App Loaded")
  function App() {
    return (
        <Router>
            <div>
                <h1>Routing - Hello World</h1>
                <Link to="/"> Home </Link> --
                <Link to="./Components/withdrawl/"> Withdrawl </Link> --
                <Link to="./Components/deposit/"> Deposit </Link> --
                <Link to="./Components/all_data/"> All Data </Link> --
                <Link to="./Components/create_account"> Create Account </Link>
                <hr/>
                <Route path="/" exact           element={Home} />
                <Route path="/withdrawl/"       element={Withdrawl} />
                <Route path="/deposit/"         element={Deposit} />
                <Route path="/all_data/"        element={All_Data} />
                <Route path="/create_account/"   element={Create_Account} />
            </div>
        </Router>
    )
  }

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
