import React from "react";
import {UserContext} from '../../App.js';

function Balance() {

    console.log("Balance Loaded");
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Balance Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default Balance;