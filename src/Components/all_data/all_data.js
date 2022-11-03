import React from "react";
import {UserContext} from '../../context.js';

function AllData() {

    console.log("AllData Loaded");
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>AllData Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}

export default AllData;