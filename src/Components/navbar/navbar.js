import {Link} from 'react-router-dom';
import {UserContext} from '../../App.js';

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
        <a className="nav-link" href="/">Home</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/Components/create_account">Create Account</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/Components/login">Login</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/Components/balance">Balance</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/Components/all_data">All Data</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/Components/withdraw">Withdraw</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/Components/deposit">Deposit</a>
    </li>
    
        </ul>
        </>
    );
}

export default NavBar;