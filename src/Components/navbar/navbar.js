import {Link} from "react-router-dom";

function NavBar() {
    return (
        <>
            {/* <Link to="/"> Home </Link> --
            <Link to="/Components/create_account/"> Create Account </Link> --
            <Link to="/Components/login/"> Login </Link> --
            <Link to="/Components/balance/"> Balance </Link> --
            <Link to="/Components/all_data/"> All Data </Link> --
            <Link to="/Components/withdraw/"> Withdraw </Link> --
            <Link to="/Components/deposit/"> Deposit </Link> */}
            
            <ul className="nav nav-pills navbar-right">
    <li className="nav-item">
        <Link className="nav-link" to="/">Bad Bank</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Components/create_account">Create Account</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Components/withdraw">Withdraw</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Components/deposit">Deposit</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Components/all_data">All Data</Link>
    </li>
    
        </ul>
        </>
    );
}

export default NavBar;