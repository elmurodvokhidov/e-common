import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div className="notFound">
            <div className="notFoundBlur">
                <h1>Oops!</h1>
                <h3>404 - Page Not Found!</h3>
                <p>The page you are looking for might have been removed had its name changed or is temorarily unavailable. Please <NavLink to={'/'}> click here</NavLink> to return to the main menu!</p>
            </div>
        </div>
    )
}

export default NotFound;