import React from "react";
import {UserContext} from '../../App.js';

function Balance() {
    const ctx = React.useContext(UserContext);
    console.log("Balance Loaded");
    
    return (
        <div>
            <h3>Balance Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default Balance;