import React from "react";
import {UserContext} from '../../App.js';

function Withdraw() {
    const ctx = React.useContext(UserContext);
    console.log("Withdraw Loaded");

    return (
        <div>
            <h3>Withdraw Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default Withdraw;