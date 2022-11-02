import React from "react";
import {UserContext} from '../../App.js';

function Deposit() {
    const ctx = React.useContext(UserContext);
    console.log("Deposit Loaded");

    return (
        <div>
            <h3>Deposit Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default Deposit;