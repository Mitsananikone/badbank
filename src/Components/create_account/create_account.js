import React from "react";
import {UserContext} from '../../App.js';

function CreateAccount() {
    const ctx = React.useContext(UserContext);
    console.log("CreateAccount Loaded");

    return (
        <div>
            <h3>CreateAccount Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default CreateAccount;