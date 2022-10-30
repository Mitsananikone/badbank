import React from "react";
import {UserContext} from '../../App.js';

function Login() {
    const ctx = React.useContext(UserContext);
    console.log("Login Loaded");
    
    return (
        <div>
            <h3>Login Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default Login;