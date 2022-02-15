import React from "react"
import { Link } from "react-router-dom"
import logo from "../../logo.jpg";
import "./navBar.css"

export const Navbar = () => {
    return (
        <>
            <div className="flexbox">
                <img width="150" alt="logo" src={logo} href="../../logo.jpg" />
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
                    <ul className="navbar__item active">
                        <Link className="navbar__link" to="/meetDeryk">Meet Deryk</Link>
                    </ul>
                </ul>
            </div>
        </>
    )
}