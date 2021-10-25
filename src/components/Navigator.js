import React from "react";
import {Link} from "react-router-dom"
import "./navigator.css"
function Navigator() {
    return(
        <div className="asd">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
        </div>
    );
}
export default Navigator;