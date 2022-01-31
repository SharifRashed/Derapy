import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"

export const Navbar = () => {
    return (
        <ul className="navbar">
            <ul className="navbar__item active">
                <Link className="navbar__link" to="/suggestions">Podcast Suggestions</Link>
            </ul>
            <ul className="navbar__item active">
                <Link className="navbar__link" to="/suggestions/create">Podcast Suggestion Form</Link>
            </ul>
            <ul className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Homepage</Link>
            </ul>
        </ul>
    )
}