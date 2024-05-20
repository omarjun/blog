import React from "react";
function Logo({width = '40px'}){
    return(
        <div>
            <img src="src/assets/logo-white.png" alt="logo" style={{ width }}/>
        </div>
    )
}

export default Logo